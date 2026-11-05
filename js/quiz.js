/**
 * js/quiz.js
 * Logika kuis & ujian akhir untuk JagaData
 * - Mengambil 10 soal acak dari bank 20 soal (atau 5 soal untuk placement test)
 * - Mengacak urutan opsi jawaban tanpa menampilkan jawaban asli di DOM
 * - 1 soal per layar dengan navigasi & ringkasan sebelum submit
 * - Evaluasi skor dan pembentukan hasil komprehensif
 */

(function () {
  // Sesi ujian aktif saat ini
  let activeSession = null;

  // Utilitas acak Fisher-Yates
  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  window.QuizEngine = {
    // Memulai sesi ujian baru untuk suatu level
    startExam: function (levelId) {
      const level = window.EDU_CONTENT.levels.find(l => l.id === levelId);
      if (!level || !level.bankSoal || level.bankSoal.length === 0) {
        console.error("Bank soal tidak ditemukan untuk level", levelId);
        return null;
      }

      // 1. Ambil 10 soal acak dari bank 20 soal
      const shuffledQuestions = shuffleArray(level.bankSoal).slice(0, 10);

      // 2. Acak urutan pilihan A-D untuk tiap soal dan petakan kunci jawaban internal
      const sessionQuestions = shuffledQuestions.map((q, idx) => {
        // Objek pilihan terindeks: [{ text: "...", isCorrect: true/false }]
        const mappedChoices = q.pilihan.map((text, cIdx) => ({
          text: text,
          isCorrect: cIdx === q.jawabanBenar
        }));

        const shuffledChoices = shuffleArray(mappedChoices);

        return {
          sessionQuestionId: `sq-${idx + 1}`,
          originalId: q.id,
          levelId: q.level,
          babRujukan: q.babRujukan,
          pertanyaan: q.pertanyaan,
          penjelasan: q.penjelasan,
          // Pilihan yang ditampilkan ke UI (hanya teks, tanpa penanda jawaban di elemen)
          choices: shuffledChoices.map(c => c.text),
          // Indeks jawaban benar pada urutan acak saat ini (tersimpan di closure/memori)
          _correctIndex: shuffledChoices.findIndex(c => c.isCorrect)
        };
      });

      activeSession = {
        isPlacement: false,
        levelId: levelId,
        levelName: level.nama,
        levelBadge: level.badge,
        questions: sessionQuestions,
        currentQuestionIndex: 0,
        // Jawaban pengguna: array indeks pilihan yang dipilih per nomor (null jika belum dijawab)
        userAnswers: new Array(sessionQuestions.length).fill(null),
        startTime: Date.now(),
        submitted: false,
        result: null
      };

      return activeSession;
    },

    // Memulai tes penempatan (5 soal campuran)
    startPlacementTest: function () {
      const questions = window.EDU_CONTENT.placementQuestions || [];
      if (questions.length === 0) return null;

      const sessionQuestions = questions.map((q, idx) => {
        const mappedChoices = q.pilihan.map((text, cIdx) => ({
          text: text,
          isCorrect: cIdx === q.jawabanBenar
        }));
        const shuffledChoices = shuffleArray(mappedChoices);

        return {
          sessionQuestionId: `pt-${idx + 1}`,
          originalId: q.id,
          levelId: q.level,
          babRujukan: "Dasar Keamanan",
          pertanyaan: q.pertanyaan,
          penjelasan: q.penjelasan,
          choices: shuffledChoices.map(c => c.text),
          _correctIndex: shuffledChoices.findIndex(c => c.isCorrect)
        };
      });

      activeSession = {
        isPlacement: true,
        levelId: 0,
        levelName: "Tes Penempatan",
        levelBadge: "Penempatan",
        questions: sessionQuestions,
        currentQuestionIndex: 0,
        userAnswers: new Array(sessionQuestions.length).fill(null),
        startTime: Date.now(),
        submitted: false,
        result: null
      };

      return activeSession;
    },

    getActiveSession: function () {
      return activeSession;
    },

    setCurrentIndex: function (idx) {
      if (!activeSession) return;
      if (idx >= 0 && idx < activeSession.questions.length) {
        activeSession.currentQuestionIndex = idx;
      }
    },

    recordAnswer: function (questionIndex, choiceIndex) {
      if (!activeSession || activeSession.submitted) return;
      if (questionIndex >= 0 && questionIndex < activeSession.userAnswers.length) {
        activeSession.userAnswers[questionIndex] = choiceIndex;
      }
    },

    getAnswerStatusSummary: function () {
      if (!activeSession) return { total: 0, answered: 0, unanswered: [] };
      const total = activeSession.questions.length;
      let answered = 0;
      const unanswered = [];
      activeSession.userAnswers.forEach((ans, idx) => {
        if (ans !== null && ans !== undefined) {
          answered++;
        } else {
          unanswered.push(idx + 1); // 1-based index
        }
      });
      return { total, answered, unanswered };
    },

    // Evaluasi seluruh jawaban pengguna dan kembalikan rincian hasil
    submitExam: function () {
      if (!activeSession) return null;
      activeSession.submitted = true;

      let correctCount = 0;
      const detailedReview = [];
      const weakBabs = new Set();

      activeSession.questions.forEach((q, idx) => {
        const userChoiceIdx = activeSession.userAnswers[idx];
        const isCorrect = userChoiceIdx === q._correctIndex;
        if (isCorrect) {
          correctCount++;
        } else {
          if (q.babRujukan) {
            weakBabs.add(q.babRujukan);
          }
        }

        detailedReview.push({
          number: idx + 1,
          originalId: q.originalId,
          babRujukan: q.babRujukan,
          pertanyaan: q.pertanyaan,
          choices: q.choices,
          userChoiceIdx: userChoiceIdx,
          userChoiceText: userChoiceIdx !== null && userChoiceIdx !== undefined ? q.choices[userChoiceIdx] : "Tidak dijawab",
          correctChoiceIdx: q._correctIndex,
          correctChoiceText: q.choices[q._correctIndex],
          isCorrect: isCorrect,
          penjelasan: q.penjelasan
        });
      });

      const totalQuestions = activeSession.questions.length;
      let score = 0;
      let isPassed = false;

      if (activeSession.isPlacement) {
        // Untuk placement: skor = (benar / 5) * 100. Lulus jika >= 80 (minimal 4 benar)
        score = Math.round((correctCount / totalQuestions) * 100);
        isPassed = score >= 80;
      } else {
        // Standar ujian akhir: skor = jumlah benar * 10. Lulus jika skor >= 70 (minimal 7 benar)
        score = correctCount * 10;
        isPassed = score >= 70;

        // Catat ke storage progres
        window.AppStorage.recordQuizResult(activeSession.levelId, score, isPassed);
      }

      activeSession.result = {
        isPlacement: activeSession.isPlacement,
        levelId: activeSession.levelId,
        score: score,
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        isPassed: isPassed,
        passingGrade: activeSession.isPlacement ? 80 : 70,
        weakBabs: Array.from(weakBabs),
        detailedReview: detailedReview,
        durationSeconds: Math.round((Date.now() - activeSession.startTime) / 1000)
      };

      return activeSession.result;
    },

    clearSession: function () {
      activeSession = null;
    }
  };
})();
