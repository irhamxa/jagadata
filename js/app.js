/**
 * js/app.js
 * Router berbasis Hash, Pengendali Tampilan (UI Renderer), dan Interaksi
 * JagaData - Edukasi Keamanan Data Pribadi
 */

(function () {
  const content = window.EDU_CONTENT;
  const storage = window.AppStorage;
  const quizEngine = window.QuizEngine;

  const appRoot = document.getElementById("app");

  // Utilitas Sanitasi Sederhana & Aman
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Izinkan tag terbatas aman (strong, code, em, br) pada konten terverifikasi
  function sanitizeSafeHTML(html) {
    if (!html) return "";
    return String(html)
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/on\w+="[^"]*"/g, "")
      .replace(/javascript:/gi, "");
  }

  // ============================================================
  // PENGATUR TEMA & UKURAN TEKS
  // ============================================================
  function initPreferences() {
    const prefs = storage.getPreferences();
    if (prefs.fontSize) {
      document.documentElement.setAttribute("data-font-size", prefs.fontSize);
    }
    if (prefs.theme && prefs.theme !== "auto") {
      document.documentElement.setAttribute("data-theme", prefs.theme);
    }

    // Pasang event listener tombol kontrol di header jika ada
    const fontNormalBtn = document.getElementById("btn-font-normal");
    const fontLargeBtn = document.getElementById("btn-font-large");
    const fontXLargeBtn = document.getElementById("btn-font-xlarge");
    const themeToggleBtn = document.getElementById("btn-theme-toggle");

    function updateFontButtons(size) {
      [fontNormalBtn, fontLargeBtn, fontXLargeBtn].forEach(b => b && b.classList.remove("active"));
      if (size === "normal" && fontNormalBtn) fontNormalBtn.classList.add("active");
      if (size === "large" && fontLargeBtn) fontLargeBtn.classList.add("active");
      if (size === "xlarge" && fontXLargeBtn) fontXLargeBtn.classList.add("active");
    }

    updateFontButtons(prefs.fontSize || "normal");

    if (fontNormalBtn) {
      fontNormalBtn.addEventListener("click", () => {
        document.documentElement.setAttribute("data-font-size", "normal");
        storage.setPreference("fontSize", "normal");
        updateFontButtons("normal");
      });
    }
    if (fontLargeBtn) {
      fontLargeBtn.addEventListener("click", () => {
        document.documentElement.setAttribute("data-font-size", "large");
        storage.setPreference("fontSize", "large");
        updateFontButtons("large");
      });
    }
    if (fontXLargeBtn) {
      fontXLargeBtn.addEventListener("click", () => {
        document.documentElement.setAttribute("data-font-size", "xlarge");
        storage.setPreference("fontSize", "xlarge");
        updateFontButtons("xlarge");
      });
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "auto";
        let nextTheme = "dark";
        if (currentTheme === "dark") nextTheme = "light";
        else if (currentTheme === "light") nextTheme = "auto";
        else nextTheme = "dark";

        if (nextTheme === "auto") {
          document.documentElement.removeAttribute("data-theme");
          storage.setPreference("theme", "auto");
          themeToggleBtn.textContent = "🌓 Mode";
        } else {
          document.documentElement.setAttribute("data-theme", nextTheme);
          storage.setPreference("theme", nextTheme);
          themeToggleBtn.textContent = nextTheme === "dark" ? "🌙 Gelap" : "☀️ Terang";
        }
      });
    }
  }

  // ============================================================
  // ROUTING BERBASIS HASH
  // ============================================================
  function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);

    if (parts.length === 0) {
      return { route: "home" };
    }
    if (parts[0] === "levels") {
      return { route: "levels" };
    }
    if (parts[0] === "level" && parts[1]) {
      const levelId = parseInt(parts[1], 10);
      if (parts[2] === "bab" && parts[3]) {
        return { route: "bab", levelId: levelId, babId: parts[3] };
      }
      if (parts[2] === "quiz") {
        return { route: "quiz", levelId: levelId };
      }
      if (parts[2] === "result") {
        return { route: "result", levelId: levelId };
      }
      return { route: "level-detail", levelId: levelId };
    }
    if (parts[0] === "placement-test") {
      return { route: "placement-test" };
    }
    if (parts[0] === "cek-cepat") {
      return { route: "cek-cepat" };
    }
    if (parts[0] === "tentang") {
      return { route: "tentang" };
    }
    if (parts[0] === "privasi") {
      return { route: "privasi" };
    }

    return { route: "home" };
  }

  function handleRoute() {
    const routeInfo = parseHash();
    window.scrollTo(0, 0);

    // Update active nav link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href") || "";
      if (href === window.location.hash || (window.location.hash === "" && href === "#/")) {
        link.classList.add("active");
      }
    });

    switch (routeInfo.route) {
      case "home":
        renderHomeView();
        break;
      case "levels":
        renderLevelsView();
        break;
      case "level-detail":
        renderLevelDetailView(routeInfo.levelId);
        break;
      case "bab":
        renderBabView(routeInfo.levelId, routeInfo.babId);
        break;
      case "quiz":
        renderQuizView(routeInfo.levelId);
        break;
      case "result":
        renderResultView(routeInfo.levelId);
        break;
      case "placement-test":
        renderPlacementQuizView();
        break;
      case "cek-cepat":
        renderQuickCheckView();
        break;
      case "tentang":
        renderAboutView();
        break;
      case "privasi":
        renderPrivacyView();
        break;
      default:
        renderHomeView();
        break;
    }
  }

  // ============================================================
  // VIEW: BERANDA
  // ============================================================
  function renderHomeView() {
    const overallProgress = storage.getOverallProgress();
    const state = storage.getState();

    let html = `
      <div class="container">
        <!-- Banner Keamanan & Privasi -->
        <div class="safety-banner" role="status">
          <span>🛡️</span>
          <span><strong>100% Bebas Akun & Privat:</strong> Seluruh materi dapat dibaca langsung. Progres belajar Anda disimpan hanya di memori browser ini (localStorage).</span>
        </div>

        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-tag">✨ Edukasi Keamanan Siber untuk Semua Usia</div>
          <h1 class="hero-title">Lindungi Data Pribadi & Rekening Anda dari Kejahatan Siber</h1>
          <p class="hero-desc">
            Panduan terstruktur dari nol hingga mahir untuk mengenali penipuan (scam), pesan jebakan (phishing), bahaya file APK palsu, hingga hak perlindungan data Anda sesuai UU PDP.
          </p>
          <div class="hero-actions">
            <a href="#/levels" class="btn btn-primary btn-lg">🚀 Mulai Belajar Sekarang</a>
            <a href="#/placement-test" class="btn btn-secondary btn-lg">🎯 Tes Penempatan Cepat (5 Soal)</a>
          </div>
        </section>

        <!-- Progres Keseluruhan -->
        <div class="overall-progress-card">
          <div class="overall-progress-header">
            <span>Progres Belajar Keseluruhan</span>
            <span style="color: var(--brand-primary); font-size: 1.15rem;">${overallProgress}%</span>
          </div>
          <div class="progress-track" aria-label="Progres Belajar Keseluruhan">
            <div class="progress-fill" style="width: ${overallProgress}%;"></div>
          </div>
          <div class="overall-progress-desc">
            <span>${overallProgress === 100 ? "🎉 Selamat! Anda telah menuntaskan seluruh level." : "Selesaikan 4 bab dan ujian akhir di setiap level"}</span>
            <button id="btn-reset-progress-home" class="btn btn-sm btn-outline-danger" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">Atur Ulang Progres</button>
          </div>
        </div>

        <!-- Ringkasan 4 Level Pembelajaran -->
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h2 style="font-size: 1.5rem; font-weight: 800;">4 Level Pembelajaran Bertahap</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Dirancang berjenjang dari yang paling dasar hingga tingkat regulasi & insiden.</p>
          </div>
          <a href="#/levels" style="font-size: 0.95rem; font-weight: 600;">Lihat Semua &rarr;</a>
        </div>

        <div class="level-grid">
          ${content.levels.map(lvl => renderLevelCardHtml(lvl)).join("")}
        </div>

        <!-- Bantuan Cepat Jika Terlanjur Tertipu -->
        <div style="margin-top: 3rem; background: var(--bg-surface); border: 2px dashed var(--color-danger); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--color-danger);">
            <span style="font-size: 1.5rem;">🚨</span>
            <h3 style="font-size: 1.25rem; font-weight: 800;">Sudah terlanjur mentransfer uang atau membagikan data rahasia?</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            Jangan panik! Waktu sangat menentukan. Segera buka panduan darurat untuk menghubungi bank pemblokir rekening dan kanal pelaporan resmi (OJK 157, IASC, dan Patroli Siber).
          </p>
          <div>
            <a href="#/cek-cepat" class="btn btn-secondary" style="border-color: var(--color-danger); color: var(--color-danger);">
              Buka Protokol Cepat Penipuan &rarr;
            </a>
          </div>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;

    const resetBtn = document.getElementById("btn-reset-progress-home");
    if (resetBtn) {
      resetBtn.addEventListener("click", showResetConfirmModal);
    }
  }

  // ============================================================
  // VIEW: DAFTAR LEVEL
  // ============================================================
  function renderLevelsView() {
    let html = `
      <div class="container">
        <div style="margin-bottom: 2rem;">
          <ul class="breadcrumb">
            <li><a href="#/">Beranda</a></li>
            <li>Daftar Level</li>
          </ul>
          <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Tingkatan Pembelajaran</h1>
          <p style="color: var(--text-muted); font-size: 1.05rem;">
            Tiap level memiliki 4 bab materi ringkas dan 1 ujian akhir. Selesaikan keempat bab untuk membuka ujian, dan lulus ujian untuk membuka level berikutnya.
          </p>
        </div>

        <div class="level-grid">
          ${content.levels.map(lvl => renderLevelCardHtml(lvl)).join("")}
        </div>
      </div>
    `;

    appRoot.innerHTML = html;
  }

  // Helper render kartu level
  function renderLevelCardHtml(lvl) {
    const isUnlocked = storage.isLevelUnlocked(lvl.id);
    const progress = storage.getLevelProgress(lvl.id);
    const isCompleted = progress === 100;
    const lockedReason = !isUnlocked ? storage.getLevelLockedReason(lvl.id) : "";

    let statusPill = "";
    if (isCompleted) {
      statusPill = `<span class="level-status-pill status-completed">✅ Selesai (100%)</span>`;
    } else if (isUnlocked) {
      statusPill = `<span class="level-status-pill status-active">📖 Berjalan (${progress}%)</span>`;
    } else {
      statusPill = `<span class="level-status-pill status-locked">🔒 Terkunci</span>`;
    }

    return `
      <div class="level-card level-${lvl.id} ${!isUnlocked ? "locked" : ""}">
        <div>
          <div class="level-card-header">
            <span class="level-badge">${lvl.badge}</span>
            ${statusPill}
          </div>
          <h2 class="level-card-title">${lvl.id}. ${lvl.nama}: ${lvl.judul}</h2>
          <p class="level-card-goal">${lvl.tujuan}</p>
        </div>

        <div>
          <div class="level-card-progress">
            <div class="level-progress-bar-wrap">
              <div class="progress-track" style="height: 8px;">
                <div class="progress-fill" style="width: ${progress}%; background: ${lvl.warna};"></div>
              </div>
              <span>${progress}%</span>
            </div>
          </div>

          ${
            !isUnlocked
              ? `<div class="level-lock-reason">
                  <span>🔒</span>
                  <span>${lockedReason}</span>
                </div>
                <button class="btn btn-secondary btn-block disabled" disabled>Level Terkunci</button>`
              : `<a href="#/level/${lvl.id}" class="btn btn-primary btn-block">Buka Materi & Ujian &rarr;</a>`
          }
        </div>
      </div>
    `;
  }

  // ============================================================
  // VIEW: DETAIL LEVEL (Daftar 4 Bab & Status Ujian)
  // ============================================================
  function renderLevelDetailView(levelId) {
    const lvl = content.levels.find(l => l.id === levelId);
    if (!lvl) {
      window.location.hash = "#/levels";
      return;
    }

    const isUnlocked = storage.isLevelUnlocked(levelId);
    if (!isUnlocked) {
      alert(storage.getLevelLockedReason(levelId));
      window.location.hash = "#/levels";
      return;
    }

    const progress = storage.getLevelProgress(levelId);
    const examUnlocked = storage.isExamUnlocked(levelId);
    const examPassed = !!storage.getState().quizPassed[levelId];
    const stats = storage.getState().quizStats[levelId] || { attempts: 0, bestScore: 0 };

    let html = `
      <div class="container">
        <div class="level-detail-header">
          <ul class="breadcrumb">
            <li><a href="#/">Beranda</a></li>
            <li><a href="#/levels">Level</a></li>
            <li>${lvl.badge}: ${lvl.nama}</li>
          </ul>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <span class="level-badge" style="background: ${lvl.warnaBg}; color: ${lvl.warna};">${lvl.badge}</span>
            <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-muted);">Progres Level: ${progress}%</span>
          </div>
          <h1 style="font-size: 2.1rem; font-weight: 800; margin-bottom: 0.75rem;">${lvl.nama}: ${lvl.judul}</h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 70ch;">
            ${lvl.tujuan}
          </p>
        </div>

        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem;">Bab Materi Pembelajaran (4 Bab)</h2>
        <div class="bab-list">
          ${lvl.babs.map(bab => {
            const isDone = storage.isBabCompleted(bab.id);
            return `
              <div class="bab-item-card ${isDone ? "completed" : ""}">
                <div class="bab-item-info">
                  <div class="bab-item-badge">
                    <span>${bab.nomor}</span>
                    ${isDone ? `<span style="color: var(--color-success); font-weight: 600;">✓ Selesai</span>` : ""}
                  </div>
                  <h3 class="bab-item-title">${bab.judul}</h3>
                  <p class="bab-item-desc">${bab.ringkasan}</p>
                  <div class="bab-item-meta">
                    <span>⏱️ Estimasi: ${bab.waktuBaca}</span>
                  </div>
                </div>
                <div style="flex-shrink: 0;">
                  <a href="#/level/${lvl.id}/bab/${bab.id}" class="btn ${isDone ? "btn-secondary" : "btn-primary"}">
                    ${isDone ? "Baca Ulang" : "Mulai Baca"} &rarr;
                  </a>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Ujian Akhir Level Banner -->
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem;">Ujian Kelulusan Level</h2>
        <div class="exam-banner-card ${examPassed ? "passed" : (examUnlocked ? "unlocked" : "")}">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
              <span style="font-size: 1.3rem;">📝</span>
              <h3 style="font-size: 1.25rem; font-weight: 700;">Ujian Akhir ${lvl.nama} (10 Soal Acak)</h3>
              ${examPassed ? `<span class="level-status-pill status-completed">Lulus</span>` : ""}
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 60ch;">
              Diambil acak dari bank 20 soal. Skor minimal lulus adalah 70 (minimal 7 benar). Lulus ujian ini akan mengunci progres level menjadi 100% dan membuka level berikutnya.
            </p>
            ${
              stats.attempts > 0
                ? `<div style="font-size: 0.85rem; color: var(--text-subtle); margin-top: 0.5rem;">
                    Riwayat: Percobaan ke-${stats.attempts} • Skor Terbaik: ${stats.bestScore} / 100
                  </div>`
                : ""
            }
          </div>

          <div>
            ${
              !examUnlocked
                ? `<div style="text-align: right;">
                    <button class="btn btn-secondary disabled" disabled>🔒 Ujian Terkunci</button>
                    <div style="font-size: 0.8rem; color: var(--text-subtle); margin-top: 0.4rem;">
                      Selesaikan 4 bab di atas untuk membuka
                    </div>
                  </div>`
                : `<a href="#/level/${lvl.id}/quiz" class="btn ${examPassed ? "btn-secondary" : "btn-success"} btn-lg">
                    ${examPassed ? "Ulangi Ujian (Latihan)" : "Mulai Ujian Sekarang"} &rarr;
                  </a>`
            }
          </div>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;
  }

  // ============================================================
  // VIEW: BACA BAB MATERI
  // ============================================================
  function renderBabView(levelId, babId) {
    const lvl = content.levels.find(l => l.id === levelId);
    if (!lvl) {
      window.location.hash = "#/levels";
      return;
    }
    const bab = lvl.babs.find(b => b.id === babId);
    if (!bab) {
      window.location.hash = `#/level/${levelId}`;
      return;
    }

    const isDone = storage.isBabCompleted(bab.id);
    const babIdx = lvl.babs.findIndex(b => b.id === babId);
    const prevBab = babIdx > 0 ? lvl.babs[babIdx - 1] : null;
    const nextBab = babIdx < lvl.babs.length - 1 ? lvl.babs[babIdx + 1] : null;

    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li><a href="#/level/${lvl.id}">${lvl.badge}: ${lvl.nama}</a></li>
          <li>${bab.nomor}</li>
        </ul>

        <article class="bab-article">
          <header class="bab-header">
            <span class="level-badge" style="background: ${lvl.warnaBg}; color: ${lvl.warna}; margin-bottom: 0.6rem;">
              ${lvl.nama} • ${bab.nomor}
            </span>
            <h1 class="bab-title">${bab.judul}</h1>
            <div class="bab-meta-bar">
              <span>⏱️ Waktu baca: ±${bab.waktuBaca}</span>
              <span>•</span>
              <span id="bab-status-text" style="color: ${isDone ? "var(--color-success)" : "var(--text-subtle)"}; font-weight: 600;">
                ${isDone ? "✓ Sudah Ditandai Selesai" : "Belum Ditandai"}
              </span>
            </div>
          </header>

          <!-- Konten Isi Bab -->
          <div class="bab-body">
            ${bab.sections.map(sec => renderSectionHtml(sec)).join("")}
          </div>

          <!-- Kotak Kesimpulan Bab (Wajib dari Dokumen) -->
          <div class="bab-conclusion-card">
            <div class="conclusion-badge">💡 Kesimpulan Bab</div>
            <p class="conclusion-text">${bab.kesimpulan}</p>
          </div>

          <!-- Tombol Tindakan Selesai -->
          <div class="bab-action-box">
            <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1rem;">
              Sudah memahami materi bab ini? Tandai selesai untuk menambah progres Anda sebesar 20%.
            </p>
            <button id="btn-toggle-bab-done" class="btn ${isDone ? "btn-secondary" : "btn-success"} btn-lg">
              ${isDone ? "✓ Bab Ini Selesai (Klik untuk Batal)" : "✅ Tandai Bab Ini Selesai"}
            </button>
          </div>

          <!-- Navigasi Bab Sebelumnya & Berikutnya -->
          <nav class="bab-nav-buttons" aria-label="Navigasi Bab">
            <div>
              ${
                prevBab
                  ? `<a href="#/level/${lvl.id}/bab/${prevBab.id}" class="btn btn-secondary">
                      &larr; ${prevBab.nomor}
                    </a>`
                  : `<a href="#/level/${lvl.id}" class="btn btn-secondary">&larr; Daftar Bab</a>`
              }
            </div>
            <div>
              ${
                nextBab
                  ? `<a href="#/level/${lvl.id}/bab/${nextBab.id}" class="btn btn-primary">
                      ${nextBab.nomor}: ${nextBab.judul.substring(0, 24)}... &rarr;
                    </a>`
                  : `<a href="#/level/${lvl.id}" class="btn btn-primary">
                      Selesai Bab! Buka Ujian Akhir &rarr;
                    </a>`
              }
            </div>
          </nav>
        </article>
      </div>
    `;

    appRoot.innerHTML = html;

    // Pasang handler tombol tandai selesai
    const toggleBtn = document.getElementById("btn-toggle-bab-done");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const nextStatus = storage.toggleBabCompleted(bab.id);
        const statusText = document.getElementById("bab-status-text");

        if (nextStatus) {
          toggleBtn.className = "btn btn-secondary btn-lg";
          toggleBtn.textContent = "✓ Bab Ini Selesai (Klik untuk Batal)";
          if (statusText) {
            statusText.textContent = "✓ Sudah Ditandai Selesai";
            statusText.style.color = "var(--color-success)";
          }
        } else {
          toggleBtn.className = "btn btn-success btn-lg";
          toggleBtn.textContent = "✅ Tandai Bab Ini Selesai";
          if (statusText) {
            statusText.textContent = "Belum Ditandai";
            statusText.style.color = "var(--text-subtle)";
          }
        }
      });
    }
  }

  // Helper render per section konten bab
  function renderSectionHtml(sec) {
    if (sec.tipe === "paragraf") {
      return `
        <section class="content-section">
          ${sec.subjudul ? `<h2 class="section-subheading">${sec.subjudul}</h2>` : ""}
          <p class="section-text">${sanitizeSafeHTML(sec.konten)}</p>
        </section>
      `;
    }

    if (sec.tipe === "daftar") {
      return `
        <section class="content-section">
          ${sec.subjudul ? `<h2 class="section-subheading">${sec.subjudul}</h2>` : ""}
          ${sec.kontenSebelum ? `<p class="section-text">${sanitizeSafeHTML(sec.kontenSebelum)}</p>` : ""}
          <ul class="section-list">
            ${sec.items.map(item => `<li>${sanitizeSafeHTML(item)}</li>`).join("")}
          </ul>
        </section>
      `;
    }

    if (sec.tipe === "daftar-nomor") {
      return `
        <section class="content-section">
          ${sec.subjudul ? `<h2 class="section-subheading">${sec.subjudul}</h2>` : ""}
          ${sec.kontenSebelum ? `<p class="section-text">${sanitizeSafeHTML(sec.kontenSebelum)}</p>` : ""}
          <ol class="section-list-ordered">
            ${sec.items.map(item => `<li>${sanitizeSafeHTML(item)}</li>`).join("")}
          </ol>
        </section>
      `;
    }

    if (sec.tipe === "callout") {
      const typeClass = `callout-${sec.calloutType || "info"}`;
      let icon = "📌";
      if (sec.calloutType === "bahaya") icon = "⚠️";
      if (sec.calloutType === "perhatian") icon = "⚡";
      if (sec.calloutType === "tips") icon = "💡";
      if (sec.calloutType === "tindakan") icon = "🛡️";

      return `
        <div class="callout-box ${typeClass}">
          <div class="callout-title">
            <span>${icon}</span>
            <span>${sec.judul}</span>
          </div>
          <div class="callout-content">${sanitizeSafeHTML(sec.konten).replace(/\n/g, "<br>")}</div>
        </div>
      `;
    }

    return "";
  }

  // ============================================================
  // VIEW: UJIAN LEVEL (1 Soal per Layar, Bank 20 Acak 10)
  // ============================================================
  function renderQuizView(levelId) {
    const lvl = content.levels.find(l => l.id === levelId);
    if (!lvl) {
      window.location.hash = "#/levels";
      return;
    }

    if (!storage.isExamUnlocked(levelId)) {
      alert("Ujian ini terkunci! Anda harus menandai selesai 4 bab di level ini terlebih dahulu.");
      window.location.hash = `#/level/${levelId}`;
      return;
    }

    // Inisialisasi sesi baru jika belum ada atau berganti level
    let session = quizEngine.getActiveSession();
    if (!session || session.levelId !== levelId || session.isPlacement || session.submitted) {
      session = quizEngine.startExam(levelId);
    }

    renderQuizInterface(session, `#/level/${levelId}`);
  }

  // ============================================================
  // VIEW: TES PENEMPATAN (5 Soal Campuran)
  // ============================================================
  function renderPlacementQuizView() {
    let session = quizEngine.getActiveSession();
    if (!session || !session.isPlacement || session.submitted) {
      session = quizEngine.startPlacementTest();
    }
    renderQuizInterface(session, "#/");
  }

  // Render Antarmuka Kuis Terpadu (1 Soal per Layar)
  function renderQuizInterface(session, backUrl) {
    const curIdx = session.currentQuestionIndex;
    const curQ = session.questions[curIdx];
    const totalQ = session.questions.length;
    const selectedAns = session.userAnswers[curIdx];
    const progressPercent = Math.round(((curIdx + 1) / totalQ) * 100);

    const letters = ["A", "B", "C", "D"];

    let html = `
      <div class="container quiz-container">
        <div class="quiz-top-bar">
          <a href="${backUrl}" style="text-decoration: none; font-size: 0.9rem; color: var(--text-muted);">&larr; Keluar Ujian</a>
          <span class="quiz-progress-text">Soal ${curIdx + 1} dari ${totalQ}</span>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="question-card">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--brand-accent); text-transform: uppercase; margin-bottom: 0.5rem;">
            ${session.levelBadge}: Pertanyaan Nomor ${curIdx + 1}
          </div>
          <h2 class="question-prompt">${curQ.pertanyaan}</h2>

          <div class="choices-list" role="radiogroup" aria-label="Pilihan Jawaban">
            ${curQ.choices.map((choiceText, cIdx) => {
              const isSelected = selectedAns === cIdx;
              return `
                <div class="choice-label ${isSelected ? "selected" : ""}" data-choice-idx="${cIdx}" role="radio" aria-checked="${isSelected}" tabindex="0">
                  <span class="choice-letter">${letters[cIdx]}</span>
                  <span class="choice-text">${choiceText}</span>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Baris Navigasi Soal -->
        <div class="quiz-nav-row">
          <button id="btn-quiz-prev" class="btn btn-secondary" ${curIdx === 0 ? "disabled" : ""}>
            &larr; Sebelumnya
          </button>
          
          <button id="btn-quiz-submit" class="btn btn-success" style="font-weight: 700;">
            Kirim Jawaban 🚀
          </button>

          <button id="btn-quiz-next" class="btn btn-primary" ${curIdx === totalQ - 1 ? "disabled" : ""}>
            Berikutnya &rarr;
          </button>
        </div>

        <!-- Ringkasan Nomor Soal (Quick Grid) -->
        <div class="quiz-quick-nav">
          <div class="quick-nav-title">
            <span>Ringkasan Soal:</span>
            <span id="quick-nav-summary"></span>
          </div>
          <div class="quick-nav-grid">
            ${session.questions.map((_, qIdx) => {
              const isAnswered = session.userAnswers[qIdx] !== null && session.userAnswers[qIdx] !== undefined;
              const isCurrent = qIdx === curIdx;
              let cls = "quick-nav-btn";
              if (isAnswered) cls += " answered";
              if (isCurrent) cls += " current";
              return `<button class="${cls}" data-goto-q="${qIdx}">${qIdx + 1}</button>`;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;

    // Update teks ringkasan
    const summary = quizEngine.getAnswerStatusSummary();
    const sumEl = document.getElementById("quick-nav-summary");
    if (sumEl) {
      sumEl.textContent = `${summary.answered} dari ${summary.total} dijawab`;
    }

    // Event listener pilihan jawaban
    document.querySelectorAll(".choice-label").forEach(labelEl => {
      const selectChoice = () => {
        const choiceIdx = parseInt(labelEl.getAttribute("data-choice-idx"), 10);
        quizEngine.recordAnswer(curIdx, choiceIdx);
        // Refresh interface soal saat ini
        renderQuizInterface(session, backUrl);
      };
      labelEl.addEventListener("click", selectChoice);
      labelEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectChoice();
        }
      });
    });

    // Event listener Navigasi
    const prevBtn = document.getElementById("btn-quiz-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (curIdx > 0) {
          quizEngine.setCurrentIndex(curIdx - 1);
          renderQuizInterface(session, backUrl);
        }
      });
    }

    const nextBtn = document.getElementById("btn-quiz-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (curIdx < totalQ - 1) {
          quizEngine.setCurrentIndex(curIdx + 1);
          renderQuizInterface(session, backUrl);
        }
      });
    }

    // Event listener Quick Grid Buttons
    document.querySelectorAll(".quick-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetQ = parseInt(btn.getAttribute("data-goto-q"), 10);
        quizEngine.setCurrentIndex(targetQ);
        renderQuizInterface(session, backUrl);
      });
    });

    // Event listener Kirim Jawaban
    const submitBtn = document.getElementById("btn-quiz-submit");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const status = quizEngine.getAnswerStatusSummary();
        if (status.unanswered.length > 0) {
          const confirmSubmit = confirm(
            `Perhatian: Masih ada ${status.unanswered.length} soal yang belum Anda jawab (Soal nomor: ${status.unanswered.join(", ")}).\n\nApakah Anda yakin ingin tetap mengirim jawaban sekarang?`
          );
          if (!confirmSubmit) return;
        }

        // Lakukan submit evaluasi
        const result = quizEngine.submitExam();
        if (session.isPlacement) {
          renderPlacementResultView(result);
        } else {
          window.location.hash = `#/level/${session.levelId}/result`;
        }
      });
    }
  }

  // ============================================================
  // VIEW: HASIL UJIAN LEVEL
  // ============================================================
  function renderResultView(levelId) {
    const session = quizEngine.getActiveSession();
    if (!session || !session.result || session.levelId !== levelId) {
      // Jika reload, kembalikan ke level detail
      window.location.hash = `#/level/${levelId}`;
      return;
    }

    const res = session.result;
    const lvl = content.levels.find(l => l.id === levelId);

    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li><a href="#/level/${levelId}">${lvl.badge}: ${lvl.nama}</a></li>
          <li>Hasil Ujian</li>
        </ul>

        <div class="result-card ${res.isPassed ? "passed celebration-box" : "failed"}">
          <div class="score-circle">
            <span class="score-num">${res.score}</span>
            <span class="score-max">Skor / 100</span>
          </div>

          <h1 class="result-title">
            ${res.isPassed ? "🎉 LULUS UJIAN AKHIR!" : "Belum Lulus Ujian"}
          </h1>
          <p class="result-subtitle">
            ${
              res.isPassed
                ? `Hebat! Anda berhasil menjawab ${res.correctCount} dari ${res.totalQuestions} soal dengan benar. Level ini kini 100% tuntas.`
                : `Anda menjawab ${res.correctCount} dari ${res.totalQuestions} benar (syarat minimal: ${res.passingGrade}). Jangan berkecil hati, pelajari kembali bab terkait di bawah lalu coba lagi.`
            }
          </p>

          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1rem;">
            ${
              res.isPassed
                ? (levelId < 4
                    ? `<a href="#/level/${levelId + 1}" class="btn btn-primary btn-lg">Lanjut ke Level ${levelId + 1} &rarr;</a>`
                    : `<a href="#/levels" class="btn btn-success btn-lg">🏆 Selamat! Anda Telah Menjadi Master</a>`)
                : `<a href="#/level/${levelId}/quiz" class="btn btn-primary btn-lg" id="btn-retry-exam">🔄 Ulangi Ujian (Soal Baru)</a>
                   <a href="#/level/${levelId}" class="btn btn-secondary btn-lg">Kembali ke Materi</a>`
            }
          </div>
        </div>

        <!-- Daftar Bab yang Lemah jika belum lulus -->
        ${
          !res.isPassed && res.weakBabs.length > 0
            ? `<div class="weak-babs-box">
                <div class="weak-babs-title">
                  <span>⚠️</span>
                  <span>Ulas Bab yang Lemah Berdasarkan Kesalahan Anda:</span>
                </div>
                <p style="font-size: 0.95rem; color: var(--color-warning-text);">
                  Soal yang Anda jawab salah merujuk ke bab materi berikut:
                </p>
                <div class="weak-babs-list">
                  ${res.weakBabs.map(babRef => {
                    // Cari id bab
                    const match = babRef.match(/Bab\s*([0-9.]+)/i);
                    const bId = match ? match[1] : "";
                    return `
                      <a href="#/level/${levelId}/bab/${bId}" class="btn btn-sm btn-secondary" style="border-color: var(--color-warning); font-weight: 700;">
                        📖 Pelajari: ${babRef} &rarr;
                      </a>
                    `;
                  }).join("")}
                </div>
              </div>`
            : ""
        }

        <!-- Rincian Jawaban Soal Ujian -->
        <div style="margin-top: 2rem;">
          <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem;">
            Pembahasan & Evaluasi Jawaban (${res.totalQuestions} Soal)
          </h2>

          <div class="review-list">
            ${res.detailedReview.map(item => {
              const match = item.babRujukan ? item.babRujukan.match(/Bab\s*([0-9.]+)/i) : null;
              const refBabId = match ? match[1] : "";

              return `
                <div class="review-item ${item.isCorrect ? "is-correct" : "is-wrong"}">
                  <div class="review-header">
                    <span style="font-weight: 700; color: var(--text-subtle);">Soal ${item.number}</span>
                    <span class="review-badge ${item.isCorrect ? "badge-correct" : "badge-wrong"}">
                      ${item.isCorrect ? "✓ BENAR" : "✗ SALAH"}
                    </span>
                  </div>

                  <p class="review-question">${item.pertanyaan}</p>

                  <div class="review-answer-box">
                    <strong>Jawaban Anda:</strong> ${escapeHTML(item.userChoiceText)}
                  </div>

                  ${
                    !item.isCorrect
                      ? `<div class="review-answer-box" style="background-color: var(--color-success-bg); color: var(--color-success-text); border: 1px solid var(--color-success);">
                          <strong>Kunci Jawaban Benar:</strong> ${escapeHTML(item.correctChoiceText)}
                        </div>`
                      : ""
                  }

                  <div class="review-explanation">
                    <strong>Penjelasan:</strong> ${item.penjelasan}
                    ${
                      item.babRujukan
                        ? `<div style="margin-top: 0.4rem;">
                            <a href="#/level/${levelId}/bab/${refBabId}" style="font-weight: 700; font-size: 0.88rem;">
                              🔍 Pelajari lagi materi ini: ${item.babRujukan} &rarr;
                            </a>
                          </div>`
                        : ""
                    }
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;

    const retryBtn = document.getElementById("btn-retry-exam");
    if (retryBtn) {
      retryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        quizEngine.startExam(levelId);
        window.location.hash = `#/level/${levelId}/quiz`;
      });
    }
  }

  // ============================================================
  // VIEW: HASIL TES PENEMPATAN
  // ============================================================
  function renderPlacementResultView(res) {
    const isPassed = res.isPassed;

    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li>Hasil Tes Penempatan</li>
        </ul>

        <div class="result-card ${isPassed ? "passed celebration-box" : "failed"}">
          <div class="score-circle">
            <span class="score-num">${res.score}%</span>
            <span class="score-max">${res.correctCount}/${res.totalQuestions} Benar</span>
          </div>

          <h1 class="result-title">
            ${isPassed ? "🎯 Pemahaman Dasar Anda Sangat Baik!" : "Sebaiknya Mulai dari Level 1 (Dasar)"}
          </h1>
          <p class="result-subtitle">
            ${
              isPassed
                ? "Anda menjawab minimal 4 dari 5 soal dengan tepat. Anda dapat langsung melompati Level 1 (Dasar) dan membuka Level 2 (Menengah) sekarang, atau tetap membaca Level 1 jika ingin memantapkan fondasi."
                : "Hasil tes menunjukkan pemahaman Anda akan lebih kokoh jika memulai belajar dari Level 1 (Dasar). Semua materi disajikan santai dan mudah dipahami."
            }
          </p>

          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1rem;">
            ${
              isPassed
                ? `<button id="btn-skip-to-level2" class="btn btn-primary btn-lg">Buka & Lanjut ke Level 2 &rarr;</button>
                   <a href="#/level/1" class="btn btn-secondary btn-lg">Tetap Pelajari Level 1</a>`
                : `<a href="#/level/1" class="btn btn-primary btn-lg">Mulai Level 1 (Dasar) &rarr;</a>
                   <a href="#/" class="btn btn-secondary btn-lg">Kembali ke Beranda</a>`
            }
          </div>
        </div>

        <div style="margin-top: 2rem;">
          <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem;">Pembahasan Soal Tes Penempatan</h2>
          <div class="review-list">
            ${res.detailedReview.map(item => `
              <div class="review-item ${item.isCorrect ? "is-correct" : "is-wrong"}">
                <div class="review-header">
                  <span style="font-weight: 700; color: var(--text-subtle);">Nomor ${item.number}</span>
                  <span class="review-badge ${item.isCorrect ? "badge-correct" : "badge-wrong"}">
                    ${item.isCorrect ? "✓ BENAR" : "✗ SALAH"}
                  </span>
                </div>
                <p class="review-question">${item.pertanyaan}</p>
                <div class="review-answer-box">
                  <strong>Jawaban Anda:</strong> ${escapeHTML(item.userChoiceText)}
                </div>
                ${!item.isCorrect ? `
                  <div class="review-answer-box" style="background-color: var(--color-success-bg); color: var(--color-success-text); border: 1px solid var(--color-success);">
                    <strong>Kunci Benar:</strong> ${escapeHTML(item.correctChoiceText)}
                  </div>
                ` : ""}
                <div class="review-explanation">
                  <strong>Penjelasan:</strong> ${item.penjelasan}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;

    const skipBtn = document.getElementById("btn-skip-to-level2");
    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        storage.recordPlacementTest(res.score, true);
        window.location.hash = "#/level/2";
      });
    }
  }

  // ============================================================
  // VIEW: CEK CEPAT (DARURAT KORBAN PENIPUAN - BAB 4.1)
  // ============================================================
  function renderQuickCheckView() {
    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li>Cek Cepat: Apa yang Harus Dilakukan Jika Tertipu</li>
        </ul>

        <div style="margin-bottom: 2rem;">
          <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--color-danger-bg); color: var(--color-danger-text); font-weight: 700; font-size: 0.85rem; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); margin-bottom: 0.75rem;">
            🚨 Protokol Darurat Insiden
          </div>
          <h1 style="font-size: 2.1rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.75rem;">
            Apa yang Harus Dilakukan Jika Anda Baru Saja Tertipu atau Diretas?
          </h1>
          <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6;">
            <strong>Prinsip Utama:</strong> Bertindak cepat, tenang, dan berurutan. Jangan habiskan waktu membalas penipu atau menghapus percakapan. Kecepatan tindakan Anda dalam hitungan menit pertama sangat menentukan penyelamatan rekening.
          </p>
        </div>

        <!-- 4 Langkah Kritis -->
        <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2.5rem;">
          <div style="background: var(--bg-surface); border-left: 6px solid var(--color-danger); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-light); border-left-width: 6px;">
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--color-danger); margin-bottom: 0.5rem;">
              Langkah 1: Segera Hubungi Bank atau E-Wallet Resmi
            </h2>
            <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">
              Minta pemblokiran rekening tujuan, blokir kartu ATM/kartu kredit Anda, dan laporkan transaksi penipuan. Jangan mencari nomor bank di Google sembarangan (banyak nomor palsu beriklan di hasil pencarian). Buka bagian belakang kartu ATM fisik Anda untuk menemukan hotline resmi.
            </p>
          </div>

          <div style="background: var(--bg-surface); border-left: 6px solid var(--color-warning); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-light); border-left-width: 6px;">
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--color-warning-text); margin-bottom: 0.5rem;">
              Langkah 2: Amankan dan Kumpulkan Bukti Utuh (Jangan Hapus!)
            </h2>
            <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">
              Ambil tangkapan layar (screenshot) nomor telepon pelaku, percakapan lengkap dengan tanggal & jam terlihat, link yang dikirim, dan struk/mutasi transfer bank (nomor referensi & rekening tujuan). Simpan salinan di tempat terpisah.
            </p>
          </div>

          <div style="background: var(--bg-surface); border-left: 6px solid var(--brand-primary); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-light); border-left-width: 6px;">
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--brand-primary); margin-bottom: 0.5rem;">
              Langkah 3: Amankan Akun Email & Ganti Password dari HP/Laptop Bersih
            </h2>
            <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">
              Email utama adalah kunci induk. Putuskan HP yang dicurigai kena virus dari internet (matikan WiFi & Data), ganti password email dan password perbankan dari perangkat lain yang bersih, dan keluarkan semua sesi login (<em>Log out from all devices</em>).
            </p>
          </div>

          <div style="background: var(--bg-surface); border-left: 6px solid var(--lvl-4); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-light); border-left-width: 6px;">
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--lvl-4-text); margin-bottom: 0.5rem;">
              Langkah 4: Waspada Penipuan Lanjutan ("Jasa Pemulihan Dana")
            </h2>
            <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">
              JANGAN PERNAH percaya pihak di Instagram, Telegram, atau Twitter yang mengaku "hacker etis" atau "jasa penarik uang kembali" yang meminta biaya di muka. Ini adalah sindikat penipuan kedua yang mengincar korban yang sedang panik.
            </p>
          </div>
        </div>

        <!-- Kanal Pengaduan Resmi Pemerintah -->
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">Kanal Resmi Pelaporan di Indonesia</h2>
        <div class="quick-check-grid" style="margin-bottom: 2rem;">
          <div class="contact-card">
            <h3 class="contact-card-title">📞 OJK (Otoritas Jasa Keuangan)</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Indonesia Anti-Scam Centre (IASC) untuk pengaduan kejahatan transaksi keuangan dan pinjol ilegal.
            </p>
            <div style="font-size: 0.9rem; font-weight: 600;">
              Telepon: <strong>157</strong><br>
              WhatsApp: <strong>081-157-157-157</strong><br>
              Email: <code>konsumen@ojk.go.id</code>
            </div>
          </div>

          <div class="contact-card">
            <h3 class="contact-card-title">🔍 Cek Rekening & Nomor Telepon</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Layanan resmi Komdigi untuk mengecek dan melaporkan nomor rekening penipu serta nomor WhatsApp/SMS spam.
            </p>
            <div style="font-size: 0.9rem; font-weight: 600;">
              Situs Rekening: <code>cekrekening.id</code><br>
              Situs Aduan Nomor: <code>aduannomor.id</code>
            </div>
          </div>

          <div class="contact-card">
            <h3 class="contact-card-title">👮 Kepolisian RI (Patroli Siber)</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Direktorat Tindak Pidana Siber Bareskrim Polri untuk pelaporan tindak pidana siber, pemerasan, dan penipuan.
            </p>
            <div style="font-size: 0.9rem; font-weight: 600;">
              Situs: <code>patrolisiber.id</code><br>
              Layanan: Sentra Pelayanan Kepolisian Terpadu (SPKT) Polsek/Polres terdekat.
            </div>
          </div>

          <div class="contact-card">
            <h3 class="contact-card-title">🏛️ UU PDP & BSSN</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Badan Siber dan Sandi Negara serta Kementerian Komunikasi dan Digital untuk pengaduan kebocoran data institusi.
            </p>
            <div style="font-size: 0.9rem; font-weight: 600;">
              Portal: <code>bssn.go.id</code><br>
              Aduan Konten: <code>aduankonten.id</code>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin: 2rem 0;">
          <a href="#/level/4/bab/4.1" class="btn btn-primary btn-lg">Baca Materi Lengkap Bab 4.1 Respons Insiden &rarr;</a>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;
  }

  // ============================================================
  // VIEW: TENTANG PROYEK
  // ============================================================
  function renderAboutView() {
    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li>Tentang JagaData</li>
        </ul>

        <h1 style="font-size: 2.1rem; font-weight: 800; margin-bottom: 1rem;">Tentang JagaData</h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
          <strong>JagaData</strong> adalah inisiatif website edukasi publik murni yang dibangun untuk menekan angka korban penipuan online (scam), peretasan (hacking), dan kebocoran data pribadi di Indonesia.
        </p>

        <div class="bab-conclusion-card" style="border-color: var(--brand-primary); margin: 1.5rem 0;">
          <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Kenapa Website Ini Dibuat Berbeda?</h2>
          <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 1rem;">
            <li><strong>Tanpa Akun & Tanpa Login:</strong> Kami tidak meminta nama, email, nomor HP, atau data pribadi apa pun dari Anda.</li>
            <li><strong>Bebas Pelacak (No Third-Party Trackers):</strong> Tidak ada Google Analytics, Pixel iklan, atau skrip eksternal yang melacak kebiasaan browsing Anda.</li>
            <li><strong>Ramah Pemula & Lansia:</strong> Menggunakan tata bahasa Indonesia yang santai, bebas jargon berbelit-belit, dan dilengkapi tombol perbesar teks.</li>
            <li><strong>Offline & Cepat:</strong> Berjalan sebagai situs statis murni tanpa pemanggilan API backend yang membebani kuota Anda.</li>
          </ul>
        </div>

        <h2 style="font-size: 1.35rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.75rem;">Struktur Kurikulum</h2>
        <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
          Kurikulum disusun menjadi 4 tingkatan dengan 16 bab materi utuh dan 80 bank soal evaluasi berdasarkan dokumen panduan keamanan siber nasional dan UU PDP No. 27 Tahun 2022.
        </p>

        <div style="margin-top: 2rem;">
          <a href="#/levels" class="btn btn-primary">Mulai Telusuri Kurikulum &rarr;</a>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;
  }

  // ============================================================
  // VIEW: KEBIJAKAN PRIVASI
  // ============================================================
  function renderPrivacyView() {
    let html = `
      <div class="container content-readable">
        <ul class="breadcrumb">
          <li><a href="#/">Beranda</a></li>
          <li>Kebijakan Privasi</li>
        </ul>

        <h1 style="font-size: 2.1rem; font-weight: 800; margin-bottom: 1rem;">Kebijakan Privasi JagaData</h1>
        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
          Sebagai website yang mengedukasi masyarakat tentang perlindungan data pribadi, kami memegang teguh prinsip <em>Privacy by Design</em>.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1.5rem; font-size: 1.05rem; line-height: 1.7;">
          <section>
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem;">1. Tidak Ada Pengumpulan Data Pribadi</h2>
            <p>JagaData tidak meminta, mengumpulkan, atau memproses nama, alamat email, nomor telepon, alamat IP, atau identitas Anda lainnya. Anda dapat mengakses semua materi dan kuis secara anonim.</p>
          </section>

          <section>
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem;">2. Penyimpanan Progres Lokal (localStorage)</h2>
            <p>Progres membaca bab, status kelulusan ujian, dan preferensi ukuran font Anda disimpan secara lokal di perangkat Anda menggunakan fitur <code>localStorage</code> browser Anda dengan kunci <code>sdp_progress_v1</code>. Data ini <strong>tidak pernah dikirim ke server kami atau pihak manapun</strong>.</p>
          </section>

          <section>
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem;">3. Tidak Ada Cookie Pihak Ketiga & Tracker</h2>
            <p>Situs ini tidak memasang cookie iklan, Google Analytics, Facebook Pixel, atau tracker analitik pihak ketiga mana pun.</p>
          </section>

          <section>
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem;">4. Hak Menghapus Progres</h2>
            <p>Anda dapat menghapus seluruh riwayat progres belajar kapan saja hanya dengan mengklik tombol "Atur Ulang Progres" yang tersedia di beranda atau footer situs.</p>
          </section>
        </div>

        <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
          <a href="privacy.html" target="_blank" rel="noopener noreferrer" style="font-weight: 600;">
            Lihat Dokumen Kebijakan Privasi Formal Lengkap (privacy.html) &rarr;
          </a>
        </div>
      </div>
    `;

    appRoot.innerHTML = html;
  }

  // ============================================================
  // MODAL RESET PROGRES
  // ============================================================
  function showResetConfirmModal() {
    const existing = document.getElementById("reset-modal");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "reset-modal";
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-reset-title">
        <h2 id="modal-reset-title" class="modal-title">Atur Ulang Seluruh Progres?</h2>
        <p class="modal-body">
          Tindakan ini akan mengembalikan seluruh progres belajar Anda (tanda selesai bab, riwayat skor, dan kelulusan ujian) kembali ke 0%. Data yang tersimpan di browser ini akan dihapus secara permanen.
        </p>
        <div class="modal-actions">
          <button id="btn-cancel-reset" class="btn btn-secondary">Batal</button>
          <button id="btn-confirm-reset" class="btn btn-outline-danger" style="background-color: var(--color-danger); color: #fff;">Ya, Atur Ulang</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const cancelBtn = document.getElementById("btn-cancel-reset");
    const confirmBtn = document.getElementById("btn-confirm-reset");

    cancelBtn.addEventListener("click", () => overlay.remove());
    confirmBtn.addEventListener("click", () => {
      storage.resetAllProgress();
      overlay.remove();
      handleRoute();
      alert("Progres Anda berhasil diatur ulang.");
    });
  }

  // Pasang global reset trigger di footer jika ada
  window.triggerResetModal = showResetConfirmModal;

  // ============================================================
  // INISIALISASI APLIKASI
  // ============================================================
  window.addEventListener("DOMContentLoaded", () => {
    initPreferences();
    window.addEventListener("hashchange", handleRoute);
    handleRoute();

    // Footer reset button
    const footerReset = document.getElementById("footer-reset-btn");
    if (footerReset) {
      footerReset.addEventListener("click", (e) => {
        e.preventDefault();
        showResetConfirmModal();
      });
    }
  });
})();
