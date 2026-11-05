/**
 * js/storage.js
 * Manajemen penyimpanan progres edukasi keamanan data pribadi
 * Kunci penyimpanan: sdp_progress_v1
 * Aman dari error localStorage (kuota penuh / mode private / dinonaktifkan)
 */

(function () {
  const STORAGE_KEY = "sdp_progress_v1";

  // State in-memory sebagai fallback jika localStorage tidak tersedia
  let memoryFallback = null;

  function getDefaultState() {
    return {
      version: 1,
      lastUpdated: new Date().toISOString(),
      // Menyimpan bab yang sudah selesai dibaca dan ditandai oleh pengguna (contoh: "1.1": true)
      completedBabs: {},
      // Menyimpan status kelulusan ujian level (contoh: 1: true)
      quizPassed: {},
      // Menyimpan riwayat statistik kuis per level
      quizStats: {
        1: { attempts: 0, bestScore: 0, lastScore: 0, lastDate: null },
        2: { attempts: 0, bestScore: 0, lastScore: 0, lastDate: null },
        3: { attempts: 0, bestScore: 0, lastScore: 0, lastDate: null },
        4: { attempts: 0, bestScore: 0, lastScore: 0, lastDate: null }
      },
      // Status tes penempatan (opsional)
      placementTest: {
        completed: false,
        score: 0,
        skippedLevel1: false
      },
      // Preferensi tampilan (ukuran font: normal/large/xlarge, tema: auto/light/dark)
      preferences: {
        fontSize: "normal",
        theme: "auto"
      }
    };
  }

  function isValidState(obj) {
    return (
      obj &&
      typeof obj === "object" &&
      obj.version === 1 &&
      typeof obj.completedBabs === "object" &&
      typeof obj.quizPassed === "object" &&
      typeof obj.quizStats === "object"
    );
  }

  function loadState() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (isValidState(parsed)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn("Storage.loadState gagal membaca localStorage, memakai memory fallback", e);
    }

    if (memoryFallback && isValidState(memoryFallback)) {
      return memoryFallback;
    }

    const initial = getDefaultState();
    memoryFallback = initial;
    saveState(initial);
    return initial;
  }

  function saveState(state) {
    if (!state || typeof state !== "object") return;
    state.lastUpdated = new Date().toISOString();
    memoryFallback = state;

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    } catch (e) {
      console.warn("Storage.saveState gagal menulis ke localStorage", e);
    }
  }

  // API Storage
  window.AppStorage = {
    getState: function () {
      return loadState();
    },

    // Menandai bab selesai atau belum selesai
    toggleBabCompleted: function (babId, forceStatus) {
      const state = loadState();
      const current = !!state.completedBabs[babId];
      const next = typeof forceStatus === "boolean" ? forceStatus : !current;
      state.completedBabs[babId] = next;
      saveState(state);
      return next;
    },

    isBabCompleted: function (babId) {
      const state = loadState();
      return !!state.completedBabs[babId];
    },

    // Cek apakah 4 bab dalam suatu level sudah tuntas semua
    areAllBabsCompletedInLevel: function (levelId) {
      const state = loadState();
      const level = window.EDU_CONTENT.levels.find(l => l.id === levelId);
      if (!level) return false;
      return level.babs.every(bab => !!state.completedBabs[bab.id]);
    },

    // Cek apakah ujian level boleh dibuka (hanya jika 4 bab di level tersebut sudah tuntas)
    isExamUnlocked: function (levelId) {
      // Jika pernah lulus lewat placement test
      const state = loadState();
      if (levelId === 1 && state.placementTest && state.placementTest.skippedLevel1) {
        return true;
      }
      return this.areAllBabsCompletedInLevel(levelId);
    },

    // Cek apakah suatu level terbuka untuk diakses
    // Level 1 selalu terbuka. Level n terbuka jika level (n-1) sudah 100% (4 bab tuntas + lulus ujian).
    isLevelUnlocked: function (levelId) {
      if (levelId === 1) return true;
      const prevLevelId = levelId - 1;
      const state = loadState();
      
      // Jika placement test melompati level 1, maka level 2 langsung terbuka
      if (levelId === 2 && state.placementTest && state.placementTest.skippedLevel1) {
        return true;
      }

      const prevLevelBabsDone = this.areAllBabsCompletedInLevel(prevLevelId);
      const prevLevelQuizPassed = !!state.quizPassed[prevLevelId];
      return prevLevelBabsDone && prevLevelQuizPassed;
    },

    // Alasan mengapa level terkunci (untuk pesan pengguna ramah)
    getLevelLockedReason: function (levelId) {
      if (levelId === 1) return "";
      const prevLevel = window.EDU_CONTENT.levels.find(l => l.id === levelId - 1);
      const prevName = prevLevel ? prevLevel.nama : `Level ${levelId - 1}`;
      return `Selesaikan materi dan lulus ujian ${prevName} (100%) untuk membuka level ini.`;
    },

    // Hitung persentase progres per level (0% - 100%)
    // 4 bab = 80% (20% per bab), ujian akhir = 20%
    getLevelProgress: function (levelId) {
      const state = loadState();
      const level = window.EDU_CONTENT.levels.find(l => l.id === levelId);
      if (!level) return 0;

      let babsDone = 0;
      level.babs.forEach(b => {
        if (state.completedBabs[b.id]) babsDone++;
      });

      let percent = babsDone * 20; // 4 * 20 = 80%
      if (state.quizPassed[levelId]) {
        percent += 20;
      }

      // Jika level 1 dilewati via placement test
      if (levelId === 1 && state.placementTest && state.placementTest.skippedLevel1) {
        return 100;
      }

      return Math.min(100, percent);
    },

    // Hitung progres keseluruhan website (rata-rata 4 level)
    getOverallProgress: function () {
      let total = 0;
      for (let i = 1; i <= 4; i++) {
        total += this.getLevelProgress(i);
      }
      return Math.round(total / 4);
    },

    // Catat hasil ujian
    recordQuizResult: function (levelId, score, isPassed) {
      const state = loadState();
      if (!state.quizStats[levelId]) {
        state.quizStats[levelId] = { attempts: 0, bestScore: 0, lastScore: 0, lastDate: null };
      }
      const stat = state.quizStats[levelId];
      stat.attempts += 1;
      stat.lastScore = score;
      stat.lastDate = new Date().toISOString();
      if (score > stat.bestScore) {
        stat.bestScore = score;
      }
      if (isPassed) {
        state.quizPassed[levelId] = true;
      }
      saveState(state);
      return stat;
    },

    // Catat hasil tes penempatan
    recordPlacementTest: function (score, skipLevel1) {
      const state = loadState();
      state.placementTest = {
        completed: true,
        score: score,
        skippedLevel1: !!skipLevel1
      };
      if (skipLevel1) {
        // Tandai 4 bab level 1 dan ujian level 1 selesai
        const lvl1 = window.EDU_CONTENT.levels.find(l => l.id === 1);
        if (lvl1) {
          lvl1.babs.forEach(b => {
            state.completedBabs[b.id] = true;
          });
        }
        state.quizPassed[1] = true;
      }
      saveState(state);
    },

    // Preferensi UI
    getPreferences: function () {
      return loadState().preferences;
    },

    setPreference: function (key, value) {
      const state = loadState();
      if (!state.preferences) state.preferences = {};
      state.preferences[key] = value;
      saveState(state);
    },

    // Reset seluruh progres
    resetAllProgress: function () {
      const fresh = getDefaultState();
      saveState(fresh);
      return fresh;
    }
  };
})();
