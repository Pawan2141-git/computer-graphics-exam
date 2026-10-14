
// ─── State ────────────────────────────────────────────────────────────────────
let questions    = [];
let userAnswers  = [];
let markedQ      = [];
let currentQ     = 0;
let submitted    = false;
let paused       = false;
let timeLeft     = 0;
let timerInterval= null;
let pdfFileName  = '';

// ─── DOM Refs ─────────────────────────────────────────────────────────────────
const uploadScreen  = document.getElementById('upload-screen');
const loadingScreen = document.getElementById('loading-screen');
const examScreen    = document.getElementById('exam-screen');
const resultScreen  = document.getElementById('result-screen');

const dropZone      = document.getElementById('drop-zone');
const dropInner     = document.getElementById('drop-inner');
const fileSelected  = document.getElementById('file-selected');
const fileNameDisp  = document.getElementById('file-name-display');
const pdfInput      = document.getElementById('pdf-input');
const removeFileBtn = document.getElementById('remove-file-btn');
const generateBtn   = document.getElementById('generate-btn');

const loadingTitle  = document.getElementById('loading-title');
const loadingSub    = document.getElementById('loading-sub');
const progressBar   = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');

const examTitle     = document.getElementById('exam-title');
const timerEl       = document.getElementById('timer');
const pauseBtn      = document.getElementById('pause-btn');
const backBtn       = document.getElementById('back-btn');

const qNumber       = document.getElementById('q-number');
const qTopic        = document.getElementById('q-topic');
const qCount        = document.getElementById('q-count');
const questionText  = document.getElementById('question-text');
const optionsCont   = document.getElementById('options-container');
const feedbackEl    = document.getElementById('feedback');

const prevBtn       = document.getElementById('prev-btn');
const markBtn       = document.getElementById('mark-btn');
const nextBtn       = document.getElementById('next-btn');
const palette       = document.getElementById('question-palette');
const submitBtn     = document.getElementById('submit-btn');

const resultEmoji   = document.getElementById('result-emoji');
const resultTitle   = document.getElementById('result-title');
const scoreNum      = document.getElementById('score-number');
const scorePct      = document.getElementById('score-pct');
const statCorrect   = document.getElementById('stat-correct');
const statWrong     = document.getElementById('stat-wrong');
const statSkip      = document.getElementById('stat-skip');
const reviewResBtn  = document.getElementById('review-result-btn');
const newTestBtn    = document.getElementById('new-test-btn');

// ─── Helpers ──────────────────────────────────────────────────────────────────
function showScreen(id) {
  [uploadScreen, loadingScreen, examScreen, resultScreen].forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('active');
}

function setProgress(pct, title, sub) {
  progressBar.style.width = pct + '%';
  progressLabel.textContent = pct + '%';
  if (title) loadingTitle.textContent = title;
  if (sub) loadingSub.textContent = sub;
}

function checkReady() {
  const hasFile = !!pdfInput.files[0];
  generateBtn.disabled = !hasFile;
}

// ─── Drop zone ────────────────────────────────────────────────────────────────
dropZone.addEventListener('click', () => pdfInput.click());
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const f = e.dataTransfer.files[0];
  if (f && f.type === 'application/pdf') setFile(f);
  else alert('Please drop a valid PDF file.');
});

pdfInput.addEventListener('change', () => {
  if (pdfInput.files[0]) setFile(pdfInput.files[0]);
});

function setFile(file) {
  pdfFileName = file.name.replace('.pdf','');
  fileNameDisp.textContent = file.name;
  dropInner.classList.add('hidden');
  fileSelected.classList.remove('hidden');
  checkReady();
}

removeFileBtn.addEventListener('click', e => {
  e.stopPropagation();
  pdfInput.value = '';
  pdfFileName = '';
  dropInner.classList.remove('hidden');
  fileSelected.classList.add('hidden');
  checkReady();
});

// ─── Extract PDF text ─────────────────────────────────────────────────────────
async function extractPdfText(file) {
  if (typeof pdfjsLib === 'undefined') {
    throw new Error('PDF.js not loaded. Check your internet connection.');
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';
  const total = pdf.numPages;

  for (let i = 1; i <= total; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += pageText + '\n';
    setProgress(Math.round((i / total) * 40), 'Reading PDF...', `Page ${i} of ${total}`);
  }
  return fullText.trim();
}

// ─── Direct MCQ Parser (Zero API Key, Instant & Offline) ──────────────────────
function parseMCQsDirectly(text) {
  text = text.replace(/\r\n/g, '\n');

  // 1. Look for answer keys at the end (e.g. L1: Q1-D Q2-C... or Answer Key: 1-A 2-B)
  const answerKeyMap = {};
  const keyMatch = text.match(/(?:Answer\s*Key|Answers|Solutions|Key\s*Table|L\d+\s*:)\b[\s\S]*/i);
  if (keyMatch) {
    const keySection = keyMatch[0];
    const keyRegex = /(?:Q|q)?(\d+)[\s\-:.]+([A-Da-d])\b/g;
    let km;
    while ((km = keyRegex.exec(keySection)) !== null) {
      answerKeyMap[parseInt(km[1], 10)] = km[2].toUpperCase();
    }
  }

  // 2. Split text into potential question chunks
  const chunks = text.split(/\n(?=(?:Q\.?\s*\d+[\.:]|\b\d+[\.:]\s+[A-Za-z]))/);
  const questions = [];

  for (let chunk of chunks) {
    chunk = chunk.trim();
    if (!chunk || chunk.length < 15) continue;

    const qStart = chunk.match(/^(?:Q\.?\s*(\d+)[\.:]?|\b(\d+)[\.:]\s*|\bQuestion\s*(\d+)[:\.]?)\s*([\s\S]+)/);
    if (!qStart) continue;

    const qNum = parseInt(qStart[1] || qStart[2] || qStart[3] || (questions.length + 1), 10);
    let body = qStart[4].trim();

    // Check for inline answer like "Answer: a", "**Answer:** b. False", "Ans: (c)"
    let inlineAnswer = null;
    const ansMatch = body.match(/(?:\*\*Answer:?\*\*|Answer\s*:|Ans\s*:|Correct\s*(?:Option|Answer)?\s*[:\-])\s*([a-dA-D1-4])?(?:\.?\s*([^\n]+))?/i);
    if (ansMatch) {
      inlineAnswer = {
        letter: (ansMatch[1] || '').toUpperCase(),
        text: (ansMatch[2] || '').trim()
      };
      body = body.slice(0, ansMatch.index).trim();
    }

    // Extract options starting with (a), a., a), A., (A), 1., (1) etc.
    const optRegex = /(?:^|\n)\s*(?:\(?([a-dA-D1-4])[\)\.]|\b([a-dA-D1-4])[\.\)])\s*([^\n]+(?:\n(?!\s*(?:\(?[a-dA-D1-4][\)\.]|\b[a-dA-D1-4][\.\)]|\*\*Answer|Answer|Ans)).*)*)/g;
    const optMatches = [];
    let om;
    while ((om = optRegex.exec(body)) !== null) {
      optMatches.push(om);
    }

    if (optMatches.length >= 2) {
      const qText = body.slice(0, optMatches[0].index).trim().replace(/\n+/g, ' ');
      const options = [];
      for (let m of optMatches) {
        options.push(m[3].trim().replace(/\n+/g, ' '));
      }

      let correctAns = "";
      const idxMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, '1': 0, '2': 1, '3': 2, '4': 3 };

      if (inlineAnswer) {
        if (inlineAnswer.letter && idxMap[inlineAnswer.letter] !== undefined && idxMap[inlineAnswer.letter] < options.length) {
          correctAns = options[idxMap[inlineAnswer.letter]];
        }
        if (!correctAns && inlineAnswer.text) {
          for (let opt of options) {
            if (opt.toLowerCase().includes(inlineAnswer.text.toLowerCase()) || inlineAnswer.text.toLowerCase().includes(opt.toLowerCase())) {
              correctAns = opt;
              break;
            }
          }
        }
      } else if (answerKeyMap[qNum] && idxMap[answerKeyMap[qNum]] !== undefined && idxMap[answerKeyMap[qNum]] < options.length) {
        correctAns = options[idxMap[answerKeyMap[qNum]]];
      }

      if (!correctAns && options.length > 0) {
        correctAns = options[0];
      }

      questions.push({
        q: qText,
        options: options,
        answer: correctAns,
        topic: "Document Question"
      });
    }
  }

  return questions;
}

// ─── Free AI Generator (Zero API Key, Public Cloudflare Engine) ───────────────
async function generateMCQsFreeAI(text, numQ, difficulty) {
  const excerpt = text.length > 5000 ? text.slice(0, 5000) : text;
  const prompt = `You are an expert exam creator. Based on this text, generate exactly ${numQ} multiple choice questions (MCQs).
Difficulty: ${difficulty}.
Rules:
- Provide 4 distinct options labeled A, B, C, D
- Only one correct option
- Format response as ONLY a JSON array with objects containing "q", "options" (array of 4 strings), "answer" (string matching the correct option), and "topic".
No markdown codeblocks, output valid JSON directly.

Text:
${excerpt}`;

  const response = await fetch('https://text.pollinations.ai/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: 'You are an educational quiz maker. You output ONLY valid JSON arrays.' },
        { role: 'user', content: prompt }
      ],
      jsonMode: true,
      seed: Math.floor(Math.random() * 999999)
    })
  });

  if (!response.ok) {
    throw new Error(`Free AI server error: ${response.status}`);
  }

  const raw = await response.text();
  let parsed;
  try {
    parsed = JSON.parse(raw);
    if (parsed.data && Array.isArray(parsed.data)) parsed = parsed.data;
  } catch (_) {
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) throw new Error('Could not parse Free AI response.');
    parsed = JSON.parse(match[0]);
  }

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error('Free AI returned no questions.');
  }

  return sanitizeMCQs(parsed);
}

// ─── Smart NLP Fallback (100% Client-side & Offline) ──────────────────────────
function generateMCQsSmartNLP(text, numQ) {
  // Extract informative sentences from text
  const rawSentences = text
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim().replace(/\s+/g, ' '))
    .filter(s => s.length > 35 && s.length < 180 && !s.includes('http') && /^[A-Z]/.test(s));

  // Find sentences containing definitions or important concepts
  const keySentences = rawSentences.filter(s => 
    /\b(is|are|refers to|defined as|consists of|used for|known as|means|called|generates|stores)\b/i.test(s)
  );

  const pool = keySentences.length >= numQ ? keySentences : rawSentences;
  const selected = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(numQ, pool.length));

  // Collect terms for distractors
  const words = text.match(/\b[A-Z][a-zA-Z]{3,}\b/g) || ['Algorithm', 'Rendering', 'Pipeline', 'Controller'];
  const uniqueWords = [...new Set(words)];

  const results = [];
  for (let s of selected) {
    // Look for a key noun/verb phrase to blank out
    const match = s.match(/\b(is|are|refers to|defined as|means|called)\s+([a-zA-Z0-9\s\-]{4,30})(?=[,\.]|$)/i);
    let target = "";
    let question = "";

    if (match) {
      target = match[2].trim();
      question = s.replace(target, "_______________");
    } else {
      // Blank out the last 2-3 words
      const parts = s.split(' ');
      if (parts.length > 5) {
        target = parts.slice(-3).join(' ').replace(/[.,!?]/g, '');
        question = parts.slice(0, -3).join(' ') + " _______________.";
      }
    }

    if (!target || target.length < 3) continue;

    // Pick 3 plausible distractors
    const distractors = uniqueWords
      .filter(w => w.toLowerCase() !== target.toLowerCase())
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    while (distractors.length < 3) distractors.push("None of these");

    const options = [target, ...distractors].sort(() => 0.5 - Math.random());
    results.push({
      q: question,
      options: options,
      answer: target,
      topic: "Core Concept"
    });
  }

  return results.length > 0 ? results : [
    {
      q: "Which technique is commonly used to process continuous graphic primitives into discrete pixels?",
      options: ["Rasterization", "Vectorization", "Quantization", "Interpolation"],
      answer: "Rasterization",
      topic: "Graphics Basics"
    }
  ];
}

// ─── Sanitize Questions ───────────────────────────────────────────────────────
function sanitizeMCQs(rawArray) {
  if (!Array.isArray(rawArray)) return [];
  return rawArray.map((q, i) => {
    const opts = Array.isArray(q.options) && q.options.length >= 2 
      ? q.options.map(o => String(o).trim())
      : ['Option A', 'Option B', 'Option C', 'Option D'];

    let ans = String(q.answer || q.correct || opts[0]).trim();
    // If answer is letter like "A" or "a"
    if (/^[A-Da-d]$/.test(ans)) {
      const idx = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 }[ans.toUpperCase()];
      if (opts[idx]) ans = opts[idx];
    }
    // Ensure answer is in options
    if (!opts.includes(ans)) {
      const matched = opts.find(o => o.toLowerCase() === ans.toLowerCase());
      ans = matched || opts[0];
    }

    return {
      q: q.q || q.question || `Question ${i + 1}`,
      options: opts,
      answer: ans,
      topic: q.topic || q.category || 'General'
    };
  });
}

// ─── Generate flow ────────────────────────────────────────────────────────────
generateBtn.addEventListener('click', async () => {
  const file     = pdfInput.files[0];
  const numQ     = parseInt(document.getElementById('num-questions').value, 10);
  const diff     = document.getElementById('difficulty').value;
  const minsPerQ = parseFloat(document.getElementById('time-per-q').value);

  if (!file) return;

  showScreen('loading-screen');
  setProgress(5, 'Reading PDF...', 'Extracting text from document');

  try {
    // Step 1: Extract PDF text (0 → 40%)
    const text = await extractPdfText(file);

    if (!text || text.length < 50) {
      throw new Error('PDF appears to be empty or image-only (scanned). Please use a text-based PDF.');
    }

    // Step 2: Try Direct Parser First (Instant & Zero API Key!)
    setProgress(45, 'Analyzing Document...', 'Checking for question bank / assignment');
    await new Promise(r => setTimeout(r, 300));
    const directQuestions = parseMCQsDirectly(text);

    let finalMCQs = [];

    if (directQuestions && directQuestions.length >= 3) {
      setProgress(85, 'Direct Questions Found!', `Detected ${directQuestions.length} pre-formatted MCQs in PDF`);
      await new Promise(r => setTimeout(r, 500));
      // If user selected numQ and we have more, shuffle & slice
      if (directQuestions.length > numQ) {
        finalMCQs = directQuestions.sort(() => 0.5 - Math.random()).slice(0, numQ);
      } else {
        finalMCQs = directQuestions;
      }
    } else {
      // Step 3: No pre-existing questions found -> Use Free AI to generate new questions!
      setProgress(60, 'Built-in AI Thinking...', `Generating ${numQ} MCQs from document...`);

      let prog = 60;
      const progInterval = setInterval(() => {
        prog = Math.min(prog + 2, 92);
        setProgress(prog, 'Built-in AI is working...', 'Creating questions from your document');
      }, 500);

      try {
        finalMCQs = await generateMCQsFreeAI(text, numQ, diff);
      } catch (aiErr) {
        console.warn('Free AI error, falling back to local NLP generator:', aiErr);
        setProgress(80, 'Using Local Generator...', 'Extracting concepts directly from text');
        finalMCQs = generateMCQsSmartNLP(text, numQ);
      } finally {
        clearInterval(progInterval);
      }
    }

    if (!finalMCQs || finalMCQs.length === 0) {
      finalMCQs = generateMCQsSmartNLP(text, numQ);
    }

    setProgress(100, 'Test Ready!', `Loaded ${finalMCQs.length} questions. Starting now...`);
    await new Promise(r => setTimeout(r, 600));

    // Step 4: Start exam
    startExam(finalMCQs, minsPerQ, pdfFileName);

  } catch (err) {
    showScreen('upload-screen');
    alert('Notice: ' + err.message);
    console.error(err);
  }
});

// ─── Start Exam ───────────────────────────────────────────────────────────────
function startExam(mcqs, minsPerQ, title) {
  questions   = mcqs;
  userAnswers = Array(questions.length).fill(null);
  markedQ     = Array(questions.length).fill(false);
  currentQ    = 0;
  submitted   = false;
  paused      = false;
  timeLeft    = Math.round(questions.length * minsPerQ * 60);

  examTitle.textContent = title || 'MCQ Test';
  renderQuestion();
  buildPalette();
  startTimer();
  showScreen('exam-screen');
}

// ─── Render question ──────────────────────────────────────────────────────────
function renderQuestion() {
  if (!questions.length) return;
  const q = questions[currentQ];

  qNumber.textContent = `Q ${currentQ + 1}`;
  qCount.textContent  = `${currentQ + 1} of ${questions.length}`;
  qTopic.textContent  = q.topic || '';
  questionText.textContent = q.q;
  feedbackEl.textContent   = '';

  optionsCont.innerHTML = '';
  q.options.forEach((opt, i) => {
    const label = document.createElement('label');
    label.className = 'option';
    if (userAnswers[currentQ] === opt) label.classList.add('selected');
    if (submitted) {
      if (opt === q.answer)              label.classList.add('reveal');
      if (userAnswers[currentQ] === opt && opt !== q.answer) label.classList.add('wrong');
    }

    const radio = document.createElement('input');
    radio.type  = 'radio';
    radio.name  = 'opt';
    radio.value = opt;
    radio.className = 'option-radio';
    radio.checked = userAnswers[currentQ] === opt;
    radio.disabled = submitted;

    radio.addEventListener('change', () => {
      if (submitted) return;
      userAnswers[currentQ] = opt;
      renderQuestion();
      updatePalette();
    });

    const span = document.createElement('span');
    span.className = 'option-text';
    span.textContent = opt;

    label.appendChild(radio);
    label.appendChild(span);

    if (!submitted) {
      label.addEventListener('click', () => {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      });
    }

    optionsCont.appendChild(label);
  });

  // Show feedback after submit
  if (submitted) {
    const correct = userAnswers[currentQ] === q.answer;
    const skipped = userAnswers[currentQ] === null;
    if (skipped) {
      feedbackEl.textContent = `Skipped. Correct answer: ${q.answer}`;
      feedbackEl.style.color = '#64748b';
    } else if (correct) {
      feedbackEl.textContent = '✓ Correct!';
      feedbackEl.style.color = '#16a34a';
    } else {
      feedbackEl.textContent = `✗ Wrong. Correct answer: ${q.answer}`;
      feedbackEl.style.color = '#dc2626';
    }
  }

  // Mark button state
  markBtn.classList.toggle('active', markedQ[currentQ]);
  markBtn.textContent = markedQ[currentQ] ? '★ Flagged' : '⚑ Mark';

  updatePalette();
}

// ─── Palette ──────────────────────────────────────────────────────────────────
function buildPalette() {
  palette.innerHTML = '';
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => { currentQ = i; renderQuestion(); });
    palette.appendChild(btn);
  });
}

function updatePalette() {
  const btns = palette.querySelectorAll('.palette-btn');
  btns.forEach((btn, i) => {
    btn.className = 'palette-btn';
    if (i === currentQ) btn.classList.add('current');
    if (submitted) {
      if (userAnswers[i] === questions[i].answer) btn.classList.add('correct');
      else if (userAnswers[i] !== null)           btn.classList.add('wrong');
    } else {
      if (userAnswers[i] !== null) btn.classList.add('answered');
    }
    if (markedQ[i]) btn.classList.add('marked');
  });

  // Scroll current into view
  const cur = btns[currentQ];
  if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  const str = h > 0
    ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
    : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  timerEl.textContent = str;

  timerEl.className = 'timer-display';
  if (timeLeft <= 60)  timerEl.classList.add('danger');
  else if (timeLeft <= 180) timerEl.classList.add('warning');
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (paused || submitted) return;
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) { clearInterval(timerInterval); submitTest(true); }
  }, 1000);
}

pauseBtn.addEventListener('click', () => {
  paused = !paused;
  pauseBtn.textContent = paused ? '▶ Resume' : '⏸ Pause';
});

// ─── Navigation ───────────────────────────────────────────────────────────────
prevBtn.addEventListener('click', () => { if (currentQ > 0) { currentQ--; renderQuestion(); } });
nextBtn.addEventListener('click', () => { if (currentQ < questions.length-1) { currentQ++; renderQuestion(); } });
markBtn.addEventListener('click', () => { markedQ[currentQ] = !markedQ[currentQ]; renderQuestion(); });

// ─── Submit ───────────────────────────────────────────────────────────────────
submitBtn.addEventListener('click', () => submitTest(false));

function submitTest(auto) {
  if (submitted) return;
  if (!auto && !confirm('Submit the test now?')) return;

  submitted = true;
  clearInterval(timerInterval);
  pauseBtn.disabled = true;
  submitBtn.disabled = true;

  const correct = questions.filter((q, i) => userAnswers[i] === q.answer).length;
  const wrong   = questions.filter((q, i) => userAnswers[i] !== null && userAnswers[i] !== q.answer).length;
  const skip    = questions.filter((q, i) => userAnswers[i] === null).length;
  const pct     = Math.round((correct / questions.length) * 100);

  renderQuestion(); // show feedback colors
  showResultScreen(correct, wrong, skip, pct);
}

function showResultScreen(correct, wrong, skip, pct) {
  scoreNum.textContent  = `${correct}/${questions.length}`;
  scorePct.textContent  = `${pct}%`;
  statCorrect.textContent = correct;
  statWrong.textContent   = wrong;
  statSkip.textContent    = skip;

  if (pct >= 80)      { resultEmoji.textContent = '🏆'; resultTitle.textContent = 'Excellent!'; }
  else if (pct >= 60) { resultEmoji.textContent = '🎯'; resultTitle.textContent = 'Good Job!'; }
  else if (pct >= 40) { resultEmoji.textContent = '📚'; resultTitle.textContent = 'Keep Practicing!'; }
  else                { resultEmoji.textContent = '💪'; resultTitle.textContent = 'Don\'t Give Up!'; }

  showScreen('result-screen');
}

// ─── Review answers ───────────────────────────────────────────────────────────
reviewResBtn.addEventListener('click', () => {
  currentQ = 0;
  showScreen('exam-screen');
  renderQuestion();
});

// ─── New Test ─────────────────────────────────────────────────────────────────
newTestBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  questions = []; userAnswers = []; markedQ = [];
  submitted = false; paused = false;
  pdfInput.value = '';
  pdfFileName = '';
  dropInner.classList.remove('hidden');
  fileSelected.classList.add('hidden');
  checkReady();
  showScreen('upload-screen');
});

backBtn.addEventListener('click', () => {
  if (!submitted && questions.length > 0) {
    if (!confirm('Leave the test? Your progress will be lost.')) return;
  }
  clearInterval(timerInterval);
  submitted = false;
  paused = false;
  pauseBtn.disabled = false;
  submitBtn.disabled = false;
  showScreen('upload-screen');
});

// Init
checkReady();
showScreen('upload-screen');
