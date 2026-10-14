
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

const apiKeyInput   = document.getElementById('api-key-input');
const toggleKeyBtn  = document.getElementById('toggle-key-btn');
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
  const hasKey  = apiKeyInput.value.trim().length > 10;
  const hasFile = !!pdfInput.files[0];
  generateBtn.disabled = !(hasKey && hasFile);
}

// ─── API Key toggle ───────────────────────────────────────────────────────────
toggleKeyBtn.addEventListener('click', () => {
  apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
});
apiKeyInput.addEventListener('input', checkReady);

// ─── Save / restore API key ───────────────────────────────────────────────────
const savedKey = localStorage.getItem('gemini_api_key');
if (savedKey) { apiKeyInput.value = savedKey; checkReady(); }
apiKeyInput.addEventListener('change', () => {
  if (apiKeyInput.value.trim()) localStorage.setItem('gemini_api_key', apiKeyInput.value.trim());
});

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

// ─── Call Gemini API ──────────────────────────────────────────────────────────
async function generateMCQs(text, numQ, difficulty, apiKey) {
  // Truncate to ~8000 chars to stay within token limits
  const excerpt = text.length > 8000 ? text.slice(0, 8000) + '\n...[text truncated]' : text;

  const prompt = `You are an expert MCQ test creator. Based on the following document content, generate exactly ${numQ} multiple choice questions.

Difficulty level: ${difficulty}
Rules:
- Each question must have exactly 4 options labeled a, b, c, d
- Only one option is correct
- Questions should test understanding, not just memory
- Cover different parts of the document
- Make options plausible and similar in length
- For true/false questions use "True" and "False" as two of the options

Return ONLY a valid JSON array. No markdown, no explanation. Format:
[
  {
    "q": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "Option A",
    "topic": "Brief topic name"
  }
]

Document content:
${excerpt}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4096,
          responseMimeType: 'application/json'
        }
      })
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${response.status}`;
    throw new Error('Gemini API error: ' + msg);
  }

  const data = await response.json();
  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Parse JSON
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (_) {
    // Try to extract JSON array from response
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) throw new Error('Could not parse MCQ response from Gemini. Try again.');
    parsed = JSON.parse(match[0]);
  }

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error('Gemini returned no questions. Try with a different PDF or fewer questions.');
  }

  // Validate and sanitize each question
  return parsed.map((q, i) => ({
    q: q.q || q.question || `Question ${i+1}`,
    options: Array.isArray(q.options) && q.options.length >= 2 ? q.options : ['Option A','Option B','Option C','Option D'],
    answer: q.answer || q.correct || q.options?.[0] || '',
    topic: q.topic || q.category || 'General'
  }));
}

// ─── Generate flow ────────────────────────────────────────────────────────────
generateBtn.addEventListener('click', async () => {
  const apiKey = apiKeyInput.value.trim();
  const file   = pdfInput.files[0];
  const numQ   = parseInt(document.getElementById('num-questions').value);
  const diff   = document.getElementById('difficulty').value;
  const minsPerQ = parseFloat(document.getElementById('time-per-q').value);

  if (!apiKey || !file) return;

  showScreen('loading-screen');
  setProgress(0, 'Starting...', 'Initializing');

  try {
    // Step 1: Extract PDF text (0 → 40%)
    setProgress(5, 'Reading PDF...', 'Extracting text from document');
    const text = await extractPdfText(file);

    if (!text || text.length < 100) {
      throw new Error('PDF appears to be empty or image-only (scanned). Please use a text-based PDF.');
    }

    // Step 2: Generate MCQs (40 → 95%)
    setProgress(42, 'Sending to Gemini AI...', `Generating ${numQ} MCQs...`);

    // Animate progress during API call
    let prog = 42;
    const progInterval = setInterval(() => {
      prog = Math.min(prog + 1, 93);
      setProgress(prog, 'Gemini is thinking...', 'Creating your personalized questions...');
    }, 500);

    const mcqs = await generateMCQs(text, numQ, diff, apiKey);
    clearInterval(progInterval);

    setProgress(100, 'Done!', 'Launching your test...');
    await new Promise(r => setTimeout(r, 600));

    // Step 3: Start exam
    startExam(mcqs, minsPerQ, pdfFileName);

  } catch (err) {
    showScreen('upload-screen');
    alert('Error: ' + err.message);
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
