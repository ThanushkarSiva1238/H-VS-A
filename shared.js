/* ============================================================
   Shared helpers: highlight parsing, result-object codec,
   flowchart step data, and PDF generation. Used by both the
   main game (script.js) and the standalone mobile result page
   (result.html).
   ============================================================ */

const AI_STEPS = [
  "SOURCE TEXT",
  "AI receives text",
  "Analyses patterns + context",
  "Identifies meaning",
  "Generates possible translation",
  "Chooses likely wording",
  "Produces translation",
  "AI OUTPUT"
];

const HUMAN_STEPS = [
  "SOURCE TEXT",
  "Human reads the text",
  "Understands context & purpose",
  "Analyses grammar + terminology",
  "Researches difficult terms/culture",
  "Chooses translation strategy",
  "Translates the meaning",
  "Reviews & edits",
  "FINAL TRANSLATION"
];

/** Parse [[phrase||tooltip]] into interactive <mark> tags. */
function parseHighlights(str) {
  return str.replace(/\[\[(.+?)\|\|(.+?)\]\]/g, (m, phrase, tip) => {
    return `<mark class="hl">${phrase}<span class="tip">${tip}</span></mark>`;
  });
}

/** Render a flowchart column of steps into a container element. */
function renderFlow(container, steps, delayStep = 0.12) {
  container.innerHTML = "";
  steps.forEach((step, i) => {
    if (i > 0) {
      const arrow = document.createElement("div");
      arrow.className = "flow-arrow";
      container.appendChild(arrow);
    }
    const node = document.createElement("div");
    node.className = "flow-node";
    node.textContent = step;
    node.style.animationDelay = (i * delayStep) + "s";
    container.appendChild(node);
  });
}

/** Generate a unique result ID like HVAI-2026-A1B2C3 */
function generateResultId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  const year = new Date().getFullYear();
  return `HVAI-${year}-${code}`;
}

/** Encode a result object to a URL-safe base64 string. */
function encodeResult(obj) {
  const json = JSON.stringify(obj);
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Decode a URL-safe base64 string back into a result object. */
function decodeResult(str) {
  try {
    let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

/** Look up dungeon content for a given result object. */
function getContentForResult(result) {
  const d = DUNGEONS[result.dungeon];
  if (!d) return null;
  if (result.mode === "monolingual") {
    return { dungeon: d, data: d.mono[result.lang] };
  } else {
    return { dungeon: d, data: d.bi[result.direction] };
  }
}

/** Strip [[phrase||tip]] markers down to plain phrase (for PDF, no HTML). */
function stripHighlightsForPlainText(str) {
  return str.replace(/\[\[(.+?)\|\|(.+?)\]\]/g, "$1");
}

/** Parse [[phrase||tip]] into a plain highlighted <span> (no tooltip) — used
 *  for the print sheet, where nothing is interactive. Uses colour/weight
 *  rather than a background chip: background-padding on a span that wraps
 *  across lines renders incorrectly under html2canvas. */
function parseHighlightsForPrint(str) {
  return str.replace(/\[\[(.+?)\|\|(.+?)\]\]/g, (m, phrase) => {
    return `<span style="color:#8a5a12; font-weight:700;">${phrase}</span>`;
  });
}

/**
 * Build the light-theme, print-ready result sheet as an array of detached,
 * atomic DOM "chunks" (rather than one long HTML blob). Building it as
 * discrete chunks is what lets the pagination step below guarantee that a
 * page break never lands in the middle of a paragraph or list — each chunk
 * is placed on a page whole, or pushed to the next page whole.
 *
 * The content itself is plain HTML/CSS rather than jsPDF's own text
 * renderer: jsPDF has no complex-script shaping engine, so scripts like
 * Tamil (where certain vowel signs must be visually reordered around the
 * consonant they follow) come out jumbled when drawn glyph-by-glyph.
 * Letting the browser lay the text out normally — the same engine that
 * already renders it correctly on screen — and photographing that layout
 * sidesteps the problem entirely.
 */
function buildPrintChunks(result) {
  const ctx = getContentForResult(result);
  const d = ctx.dungeon;
  const data = ctx.data;
  const isMono = result.mode === "monolingual";
  const explanation = isMono ? d.explanationMono : d.explanationBi;
  const lang = ctx.lang === "en" ? explanation.en : explanation.ta;

  const PAD = "padding:0 50px;";

  const elFromHTML = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  const row = (k, v) => `
    <div style="display:flex; padding:6px 0; border-bottom:1px solid #eee;">
      <div style="width:170px; flex-shrink:0; font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:#8a6a1e; font-weight:700;">${k}</div>
      <div style="font-size:14px; color:#1c1c26;">${v}</div>
    </div>`;

  const sectionTitle = (t) => `<h2 style="font-family:'Cinzel',serif; font-size:17px; color:#3c2864; margin:0 0 14px;">${t}</h2>`;

  const block = (label, text) => `
    <div style="margin-bottom:16px; padding:14px 18px; background:#faf8f3; border-left:3px solid #d9b26a; border-radius:4px;">
      <div style="font-size:10.5px; letter-spacing:.12em; text-transform:uppercase; color:#8a6a1e; font-weight:700; margin-bottom:6px;">${label}</div>
      <div style="font-size:14px; color:#242430; white-space:pre-wrap; word-break:break-word;">${text}</div>
    </div>`;

  const flowList = (title, steps, accent) => `
    <div>
      <div style="font-family:'Cinzel',serif; font-weight:700; font-size:13.5px; color:${accent}; margin-bottom:8px;">${title}</div>
      <ol style="margin:0; padding-left:20px; font-size:13px; color:#2a2a36;">
        ${steps.map(s => `<li style="margin-bottom:4px;">${s}</li>`).join("")}
      </ol>
    </div>`;

  const chunks = [];

  // 1. Header banner — always the first thing on page 1.
  chunks.push(elFromHTML(`
    <div style="background:#0f0c18; color:#fff; padding:34px 50px; text-align:center;">
      <div style="font-family:'Cinzel',serif; font-weight:900; font-size:28px; color:#f0d9a6; letter-spacing:.03em;">HUMAN VS AI</div>
      <div style="font-size:12.5px; letter-spacing:.12em; text-transform:uppercase; color:#cfc8df; margin-top:8px;">Guess the Translation? — Player Result Sheet</div>
      <div style="font-family:monospace; font-size:11px; color:#9691b0; margin-top:10px;">${result.id}</div>
    </div>`));

  // 2. Player Result — title + rows + final line, kept together.
  chunks.push(elFromHTML(`
    <div style="${PAD} padding-top:28px;">
      ${sectionTitle("Player Result")}
      ${row("Game Mode", isMono ? "Monolingual" : "Bilingual")}
      ${row("Dungeon", `${d.name} (${d.tagline})`)}
      ${row("Dungeon Rank", d.rank)}
      ${row("Player Answer", `${result.answer} is AI`)}
      ${row("Correct Answer", `${data.correct} is AI`)}
      <div style="margin-top:18px; font-family:'Cinzel',serif; font-weight:700; font-size:16px; color:${result.correct ? "#1e8c3c" : "#be2832"};">
        FINAL RESULT: ${result.correct ? "CORRECT" : "INCORRECT"}
      </div>
    </div>`));

  // 3. Translation Content — section title travels with the first block so
  //    the heading never ends up alone at the bottom of a page.
  const contentBlocks = isMono
    ? [["Translation A", data.ai], ["Translation B", data.human]]
    : [["Source Text", data.source], ["Target A", data.targetA], ["Target B", data.targetB]];

  contentBlocks.forEach(([label, text], i) => {
    chunks.push(elFromHTML(`
      <div style="${PAD} ${i === 0 ? "padding-top:30px;" : ""}">
        ${i === 0 ? sectionTitle("Translation Content") : ""}
        ${block(label, text)}
      </div>`));
  });

  // 4. Explanation — title + analysis kept together (it's one block anyway).
  chunks.push(elFromHTML(`
    <div style="${PAD} padding-top:30px;">
      ${sectionTitle("Explanation")}
      <div style="padding:14px 18px; background:#faf8f3; border-left:3px solid #8b6cf6; border-radius:4px;">
        <div style="font-size:10.5px; letter-spacing:.12em; text-transform:uppercase; color:#8a6a1e; font-weight:700; margin-bottom:6px;">Analysis</div>
        <div style="font-size:13.5px; color:#242430; line-height:1.75; white-space:pre-wrap; word-break:break-word;">${parseHighlightsForPrint(lang)}</div>
      </div>
    </div>`));

  // 5. Translation Process — title + AI method together, Human method + footer together.
  chunks.push(elFromHTML(`
    <div style="${PAD} padding-top:30px;">
      ${sectionTitle("Translation Process")}
      ${flowList("AI Translation Method", AI_STEPS, "#c23a4a")}
    </div>`));

  chunks.push(elFromHTML(`
    <div style="${PAD} padding-top:20px;">
      ${flowList("Human Translation Method", HUMAN_STEPS, "#8a6a1e")}
      <div style="text-align:center; font-family:'Cinzel',serif; font-style:italic; color:#8a6a1e; margin-top:26px;">Thank you...</div>
    </div>`));

  return chunks;
}

/**
 * Build and trigger download of a professional-looking PDF result sheet.
 * Renders the sheet as real HTML (so Tamil and other complex scripts shape
 * correctly via the browser's own text engine), then paginates it by
 * measuring each content chunk and packing whole chunks onto pages — never
 * slicing a fixed pixel height through the middle of a paragraph or list —
 * and rendering each page as its own image with real top/bottom margin.
 * result: the decoded/encoded result object.
 * buttonEl: optional trigger button to disable with a "generating" state.
 */
async function downloadResultPDF(result, buttonEl) {
  const originalLabel = buttonEl ? buttonEl.textContent : null;
  if (buttonEl) { buttonEl.disabled = true; buttonEl.textContent = "Generating PDF…"; }

  const CONTENT_WIDTH = 780;   // css px, matches chunk width
  const PAGE_MARGIN = 30;      // css px of breathing room top+bottom per page

  const chunks = buildPrintChunks(result);

  // Measure chunks by parking them in a hidden host at their real width.
  const measureHost = document.createElement("div");
  measureHost.style.cssText = `position:fixed; left:-10000px; top:0; width:${CONTENT_WIDTH}px; background:#ffffff; font-family:'Inter','Noto Sans Tamil',sans-serif;`;
  chunks.forEach(c => measureHost.appendChild(c));
  document.body.appendChild(measureHost);

  const pageEls = [];

  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    // Two animation-frame ticks so layout/fonts have definitely settled.
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "pt", "a4");
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();
    const scale = pdfWidth / CONTENT_WIDTH;               // pt per css-px
    const pageCapacityPx = (pdfHeight / scale) - PAGE_MARGIN * 2;

    // Greedily pack whole chunks onto pages; never split one across pages.
    const pages = [];
    let current = [];
    let currentHeight = 0;
    chunks.forEach((chunk) => {
      const h = chunk.getBoundingClientRect().height;
      if (current.length && currentHeight + h > pageCapacityPx) {
        pages.push(current);
        current = [];
        currentHeight = 0;
      }
      current.push(chunk);
      currentHeight += h;
    });
    if (current.length) pages.push(current);

    for (let p = 0; p < pages.length; p++) {
      const pageEl = document.createElement("div");
      pageEl.style.cssText = `position:fixed; left:-10000px; top:0; width:${CONTENT_WIDTH}px; background:#ffffff; padding:${PAGE_MARGIN}px 0; box-sizing:border-box; font-family:'Inter','Noto Sans Tamil',sans-serif;`;
      pages[p].forEach(chunk => pageEl.appendChild(chunk)); // moves node out of measureHost
      document.body.appendChild(pageEl);
      pageEls.push(pageEl);

      const canvas = await html2canvas(pageEl, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const imgHeightPt = (canvas.height / canvas.width) * pdfWidth;

      if (p > 0) doc.addPage();
      doc.addImage(imgData, "PNG", 0, 0, pdfWidth, Math.min(imgHeightPt, pdfHeight));
    }

    doc.save(`${result.id}.pdf`);
  } finally {
    document.body.removeChild(measureHost);
    pageEls.forEach(el => el.remove());
    if (buttonEl) { buttonEl.disabled = false; buttonEl.textContent = originalLabel; }
  }
}
