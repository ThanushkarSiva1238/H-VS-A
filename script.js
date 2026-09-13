/* ============================================================
   HUMAN VS AI — GUESS THE TRANSLATION?
   Game controller. Vanilla JS, single-page, screen-based.
   ============================================================ */

(function () {
  "use strict";

  const GATE_ICON = "✦";

  const state = {
    langSource: "en",   // 'en' | 'ta' — chosen at lobby
    mode: null,         // 'monolingual' | 'bilingual'
    dungeonKey: null,
    answer: null,       // 'A' | 'B'
    correct: null,      // boolean
    resultId: null
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const SCREEN_ORDER = [
    "screen-lobby", "screen-gates", "screen-reveal", "screen-challenge",
    "screen-result", "screen-explanation", "screen-process", "screen-qr"
  ];

  function buildProgressDots() {
    const host = $("#progress-dots");
    if (!host) return;
    host.innerHTML = SCREEN_ORDER.map((id, i) =>
      `<span class="dot${i === 0 ? " active" : ""}" data-screen="${id}"></span>`
    ).join("");
  }
  buildProgressDots();

  function showScreen(id) {
    $$(".screen").forEach(s => s.classList.remove("active"));
    $("#" + id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    const pill = $("#modepill");
    if (state.mode && id !== "screen-lobby") {
      pill.hidden = false;
      pill.textContent = state.mode.toUpperCase() + (state.langSource === "ta" ? " · TA SOURCE" : " · EN SOURCE");
    } else {
      pill.hidden = true;
    }
    $$("#progress-dots .dot").forEach(d => d.classList.toggle("active", d.dataset.screen === id));
  }

  /* ---------------- Ambient starfield ---------------- */
  function buildStarfield(count = 70) {
    const field = $("#starfield");
    if (!field) return;
    field.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = (Math.random() * 1.6 + 0.6).toFixed(2);
      s.style.left = (Math.random() * 100) + "%";
      s.style.top = (Math.random() * 100) + "%";
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.setProperty("--min-op", (Math.random() * 0.15 + 0.05).toFixed(2));
      s.style.setProperty("--max-op", (Math.random() * 0.5 + 0.4).toFixed(2));
      s.style.animationDuration = (Math.random() * 4 + 3).toFixed(2) + "s";
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      field.appendChild(s);
    }
  }
  buildStarfield();

  /* ---------------- 1. Lobby ---------------- */
  $$(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.langSource = btn.dataset.lang;
    });
  });

  $$(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
      state.mode = card.dataset.mode;
      buildGates();
      showScreen("screen-gates");
    });
  });

  /* ---------------- 2. Mystery gates ---------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildGates() {
    const grid = $("#gates-grid");
    grid.innerHTML = "";
    const order = shuffle(DUNGEON_KEYS);
    order.forEach((key, i) => {
      const d = DUNGEONS[key];
      const gate = document.createElement("button");
      gate.className = "gate";
      gate.setAttribute("data-cat", key);
      gate.setAttribute("aria-label", "Mystery gate " + (i + 1));
      gate.innerHTML = `
        <span class="gate__glow"></span>
        <span class="gate__ring"><span class="gate__icon">${GATE_ICON}</span></span>
        <span class="gate__label">Gate ${i + 1}</span>
        <span class="gate__mystery">???</span>
      `;
      gate.addEventListener("click", () => selectGate(gate, key));
      grid.appendChild(gate);
    });
  }

  function selectGate(gateEl, key) {
    if (gateEl.classList.contains("opening")) return;
    state.dungeonKey = key;
    $$(".gate").forEach(g => { if (g !== gateEl) g.classList.add("dimmed"); });
    gateEl.classList.add("opening");
    setTimeout(() => {
      buildReveal(key);
      showScreen("screen-reveal");
    }, 850);
  }

  /* ---------------- 3. Reveal ---------------- */
  function buildReveal(key) {
    const d = DUNGEONS[key];
    $("#reveal-title").textContent = `YOU HAVE ENTERED THE ${d.name.toUpperCase()} DUNGEON`;
    $("#reveal-rank").textContent = d.rank;
    $("#reveal-env").textContent = d.env;
  }

  $("#btn-enter-challenge").addEventListener("click", () => {
    buildChallenge();
    showScreen("screen-challenge");
  });

  /* ---------------- 4. Challenge ---------------- */
  function buildChallenge() {
    const d = DUNGEONS[state.dungeonKey];
    $("#challenge-eyebrow").textContent = `${d.rank} · ${d.name}`;
    const blocksEl = $("#challenge-blocks");
    const choicesEl = $("#challenge-choices");
    blocksEl.innerHTML = "";
    choicesEl.innerHTML = "";
    state.answer = null;
    $("#btn-submit-answer").disabled = true;

    if (state.mode === "monolingual") {
      blocksEl.classList.add("grid-2");
      const c = d.mono[state.langSource];
      blocksEl.innerHTML = `
        <div class="text-block"><span class="text-block__label">Translation A</span><div class="text-block__body">${c.ai}</div></div>
        <div class="text-block"><span class="text-block__label">Translation B</span><div class="text-block__body">${c.human}</div></div>
      `;
    } else {
      blocksEl.classList.remove("grid-2");
      const direction = state.langSource === "en" ? "en2ta" : "ta2en";
      const c = d.bi[direction];
      blocksEl.innerHTML = `
        <div class="text-block text-block--source"><span class="text-block__label">Source Text</span><div class="text-block__body">${c.source}</div></div>
        <div class="text-blocks grid-2" style="margin-top:0;">
          <div class="text-block"><span class="text-block__label">Target A</span><div class="text-block__body">${c.targetA}</div></div>
          <div class="text-block"><span class="text-block__label">Target B</span><div class="text-block__body">${c.targetB}</div></div>
        </div>
      `;
    }

    ["A", "B"].forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = `${letter} IS AI`;
      btn.addEventListener("click", () => {
        state.answer = letter;
        $$(".choice-btn", choicesEl).forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        $("#btn-submit-answer").disabled = false;
      });
      choicesEl.appendChild(btn);
    });
  }

  $("#btn-submit-answer").addEventListener("click", () => {
    const d = DUNGEONS[state.dungeonKey];
    const direction = state.langSource === "en" ? "en2ta" : "ta2en";
    const data = state.mode === "monolingual" ? d.mono[state.langSource] : d.bi[direction];
    state.correct = state.answer === data.correct;
    state.resultId = generateResultId();
    buildResult();
    showScreen("screen-result");
  });

  /* ---------------- 5. Result ---------------- */
  function buildResult() {
    const d = DUNGEONS[state.dungeonKey];
    const direction = state.langSource === "en" ? "en2ta" : "ta2en";
    const data = state.mode === "monolingual" ? d.mono[state.langSource] : d.bi[direction];

    const banner = $("#result-banner");
    banner.textContent = state.correct ? "CORRECT, PLAYER!" : "INCORRECT, PLAYER.";
    banner.className = "result-banner " + (state.correct ? "correct" : "incorrect");

    const grid = $("#result-grid");
    const rows = [
      ["Game Mode", state.mode === "monolingual" ? "Monolingual" : "Bilingual"],
      ["Dungeon", `${d.name} · ${d.rank}`],
      ["Your Answer", `${state.answer} is AI`],
      ["Correct Answer", `${data.correct} is AI`],
    ];
    grid.innerHTML = rows.map(([k, v]) => `
      <div class="result-row"><div class="result-row__k">${k}</div><div class="result-row__v">${v}</div></div>
    `).join("");
  }

  $("#btn-see-explanation").addEventListener("click", () => {
    buildExplanation();
    showScreen("screen-explanation");
  });

  /* ---------------- 6. Explanation ---------------- */
  function buildExplanation() {
    const d = DUNGEONS[state.dungeonKey];
    const direction = state.langSource === "en" ? "en2ta" : "ta2en";
    const blocksEl = $("#explanation-blocks");

    if (state.mode === "monolingual") {
      const c = d.mono[state.langSource];
      blocksEl.classList.add("grid-2");
      blocksEl.innerHTML = `
        <div class="text-block"><span class="text-block__label">AI Translation</span><div class="text-block__body">${c.ai}</div></div>
        <div class="text-block"><span class="text-block__label">Human Translation</span><div class="text-block__body">${c.human}</div></div>
      `;

      if (state.langSource === "en") {
        $("#explanation-text").innerHTML = parseHighlights(d.explanationMono.en);
      } else {
        $("#explanation-text").innerHTML = parseHighlights(d.explanationMono.ta);
      }
    } 
    else {
      const c = d.bi[direction];
      blocksEl.classList.remove("grid-2");
      blocksEl.innerHTML = `
        <div class="text-block text-block--source"><span class="text-block__label">Source Text</span><div class="text-block__body">${c.source}</div></div>
        <div class="text-blocks grid-2" style="margin-top:0;">
          <div class="text-block"><span class="text-block__label">AI Target Text</span><div class="text-block__body">${c.targetA}</div></div>
          <div class="text-block"><span class="text-block__label">Human Target Text</span><div class="text-block__body">${c.targetB}</div></div>
        </div>
      `;
      if (state.langSource === "en") {
        $("#explanation-text").innerHTML = parseHighlights(d.explanationBi.en);
      } else {
        $("#explanation-text").innerHTML = parseHighlights(d.explanationBi.ta);
      }
    }
  }

  $("#btn-how-translation").addEventListener("click", () => {
    renderFlow($("#flow-ai"), AI_STEPS);
    renderFlow($("#flow-human"), HUMAN_STEPS);
    showScreen("screen-process");
  });

  /* ---------------- 7 & 8. Get result / QR ---------------- */
  function goToQr() {
    buildQr();
    showScreen("screen-qr");
  }
  $("#btn-get-result").addEventListener("click", goToQr);
  $("#btn-get-result-2").addEventListener("click", goToQr);

  function buildQr() {
    $("#qr-result-id").textContent = state.resultId;
    const direction = state.langSource === "en" ? "en2ta" : "ta2en";
    const resultObj = {
      id: state.resultId,
      mode: state.mode,
      dungeon: state.dungeonKey,
      lang: state.langSource,
      direction: direction,
      answer: state.answer,
      correct: state.correct,
      ts: Date.now()
    };
    const encoded = encodeResult(resultObj);
    const url = new URL("result.html", window.location.href);
    url.searchParams.set("d", encoded);

    $("#qr-direct-link").href = url.toString();

    const box = $("#qr-box");
    box.innerHTML = "";
    try {
      const typeNumber = 0;
      const qr = qrcode(typeNumber, "M");
      qr.addData(url.toString());
      qr.make();
      box.innerHTML = qr.createImgTag(5, 8);
    } catch (e) {
      box.innerHTML = `<div style="color:#000; padding:20px; max-width:220px; font-size:.8rem;">QR generation unavailable — open your result directly: <br><a href="${url}">${url}</a></div>`;
    }

    $("#btn-download-pdf").onclick = (e) => downloadResultPDF(resultObj, e.currentTarget);
  }

  /* ---------------- Return to lobby ---------------- */
  function returnToLobby() {
    state.mode = null;
    state.dungeonKey = null;
    state.answer = null;
    state.correct = null;
    state.resultId = null;
    showScreen("screen-lobby");
  }
  $("#btn-lobby-1").addEventListener("click", returnToLobby);
  $("#btn-lobby-2").addEventListener("click", returnToLobby);

})();
