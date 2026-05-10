// Replace this placeholder with the seller's WhatsApp number in international format.
const WHATSAPP_NUMBER = "97466430313";

const scentProfiles = {
  freshClean: {
    name: "Fresh & Clean",
    description:
      "You enjoy refreshing, clean, and easy-to-wear fragrances. Your ideal perfume should feel bright, comfortable, and suitable for daily use, office wear, and Qatar's warm weather.",
    personality:
      "Calm, practical, and naturally polished. You appreciate simplicity, clarity, and effortless confidence, with a style that feels neat, balanced, and easy to enjoy every day.",
    family: "Citrus | Aquatic | Fresh Musk",
    bestFor: "Office | Daily use | Warm weather",
  },
  floralElegant: {
    name: "Floral Elegant",
    description:
      "You are drawn to soft, graceful, and elegant scents. Your ideal perfume may include rose, jasmine, or delicate floral notes that feel refined and timeless.",
    personality:
      "Graceful, refined, and softly expressive. You are drawn to beauty, elegance, and timeless details, with a presence that feels warm, charming, and quietly memorable.",
    family: "Rose | White Floral | Soft Musk",
    bestFor: "Family gathering | Gift | Elegant daily wear",
  },
  sweetAttractive: {
    name: "Sweet Attractive",
    description:
      "You prefer perfumes that feel warm, sweet, and memorable. Vanilla, caramel, fruity sweetness, and soft gourmand notes may suit your taste.",
    personality:
      "Warm, expressive, and memorable. You enjoy standing out in an inviting way, with an energy that feels playful, confident, romantic, and easy for others to notice.",
    family: "Vanilla | Gourmand | Fruity Amber",
    bestFor: "Evening outing | Date night | Noticeable wear",
  },
  oudLuxury: {
    name: "Oud Luxury",
    description:
      "You enjoy rich, deep, and luxurious fragrances with a strong presence. Oud, sandalwood, leather, and woody notes may match your style.",
    personality:
      "Confident, bold, and distinguished. You appreciate depth, presence, and a strong sense of identity, often leaning toward luxury, tradition, and refined strength.",
    family: "Oud | Sandalwood | Leather Woods",
    bestFor: "Special occasion | Luxury gifting | Evening wear",
  },
  amberWarm: {
    name: "Amber Warm",
    description:
      "You prefer warm, confident, and slightly spicy fragrances. Amber, coffee, cinnamon, incense, and evening-style perfumes may suit you well.",
    personality:
      "Charismatic, confident, and emotionally rich. You give off warmth and strength together, with a style that feels mature, bold, comforting, and memorable.",
    family: "Amber | Spices | Incense",
    bestFor: "Evening outing | Gatherings | Long-lasting wear",
  },
  muskSoft: {
    name: "Musk Soft",
    description:
      "You enjoy clean, soft, and comforting scents. Musk, powdery notes, fresh laundry, soap-like freshness, and gentle perfumes may suit your personality.",
    personality:
      "Gentle, comforting, and understated. You have a peaceful, approachable energy and tend to prefer subtle elegance, softness, and a quiet sense of style.",
    family: "Clean Musk | Powdery | Soapy Fresh",
    bestFor: "Daily use | Home visits | Soft gifting",
  },
};

// Questions and scoring are centralized here for easy editing later.
const questions = [
  {
    id: "smell",
    tag: "Scent preference",
    text: "Which real-life smells do you naturally enjoy?",
    helper:
      "Choose the smell that feels most familiar and naturally appealing to you.",
    options: [
      {
        label: "Fresh lemon, orange, or citrus fruits",
        scores: { freshClean: 3 },
        tieKey: "freshClean",
      },
      {
        label: "Rose, jasmine, or fresh flowers",
        scores: { floralElegant: 3 },
        tieKey: "floralElegant",
      },
      {
        label: "Vanilla, caramel, or sweet desserts",
        scores: { sweetAttractive: 3 },
        tieKey: "sweetAttractive",
      },
      {
        label: "Sandalwood, oud, or natural wood",
        scores: { oudLuxury: 3 },
        tieKey: "oudLuxury",
      },
      {
        label: "Coffee, cinnamon, or warm spices",
        scores: { amberWarm: 3 },
        tieKey: "amberWarm",
      },
      {
        label: "Fresh laundry, soap, or baby powder",
        scores: { muskSoft: 3, freshClean: 1 },
        tieKey: "muskSoft",
      },
    ],
  },
  {
    id: "feeling",
    tag: "Desired impression",
    text: "What kind of feeling do you want your perfume to give?",
    helper: "Think about the mood you want people to notice first.",
    options: [
      { label: "Fresh and clean", scores: { freshClean: 2, muskSoft: 1 }, tieKey: "freshClean" },
      { label: "Soft and elegant", scores: { floralElegant: 2, muskSoft: 1 }, tieKey: "floralElegant" },
      { label: "Sweet and attractive", scores: { sweetAttractive: 3 }, tieKey: "sweetAttractive" },
      { label: "Deep and luxurious", scores: { oudLuxury: 3 }, tieKey: "oudLuxury" },
      { label: "Warm and bold", scores: { amberWarm: 2, sweetAttractive: 1 }, tieKey: "amberWarm" },
      { label: "Light and comforting", scores: { muskSoft: 2, freshClean: 1 }, tieKey: "muskSoft" },
    ],
  },
  {
    id: "occasion",
    tag: "Everyday use",
    text: "Where do you want to wear it most?",
    helper: "The setting helps match performance, style, and overall mood.",
    options: [
      { label: "Office", scores: { freshClean: 2, floralElegant: 1 } },
      { label: "Daily use", scores: { freshClean: 1, muskSoft: 2 } },
      { label: "Evening outing", scores: { sweetAttractive: 2, amberWarm: 2 } },
      { label: "Family gathering", scores: { floralElegant: 2, muskSoft: 1 } },
      { label: "Special occasion", scores: { oudLuxury: 3, amberWarm: 1 } },
      { label: "Gift", scores: { floralElegant: 2, oudLuxury: 1 } },
    ],
  },
  {
    id: "strength",
    tag: "Performance",
    text: "How strong do you like your perfume?",
    helper: "Choose the level of presence you usually enjoy.",
    options: [
      { label: "Soft and subtle", scores: { muskSoft: 2, floralElegant: 1 } },
      { label: "Moderate", scores: { freshClean: 1, floralElegant: 1, muskSoft: 1 } },
      { label: "Long-lasting", scores: { amberWarm: 2, oudLuxury: 1 } },
      { label: "Very strong and noticeable", scores: { oudLuxury: 2, sweetAttractive: 2 } },
    ],
  },
  {
    id: "style",
    tag: "Personal style",
    text: "What best describes your personal style?",
    helper: "Your style helps shape whether the scent should feel airy, rich, soft, or bold.",
    options: [
      { label: "Calm and classy", scores: { floralElegant: 2, freshClean: 1 } },
      { label: "Bold and confident", scores: { amberWarm: 2, sweetAttractive: 1 } },
      { label: "Romantic", scores: { floralElegant: 2, sweetAttractive: 1 } },
      { label: "Professional", scores: { freshClean: 2, muskSoft: 1 } },
      { label: "Luxury Arabic", scores: { oudLuxury: 3 } },
      { label: "Simple and clean", scores: { muskSoft: 2, freshClean: 1 } },
    ],
  },
  {
    id: "weather",
    tag: "Qatar weather",
    text: "In Qatar weather, what do you usually prefer?",
    helper: "Climate preference is especially useful for recommending practical scent styles.",
    options: [
      { label: "Fresh and light", scores: { freshClean: 2, muskSoft: 1 } },
      { label: "Long-lasting and noticeable", scores: { oudLuxury: 2, amberWarm: 1, sweetAttractive: 1 } },
      { label: "Elegant but not overpowering", scores: { floralElegant: 2, freshClean: 1 } },
      { label: "Strong evening perfume", scores: { oudLuxury: 2, amberWarm: 2 } },
    ],
  },
  {
    id: "recipient",
    tag: "For whom",
    text: "Who is this perfume for?",
    helper: "This helps shape the final recommendation tone and message.",
    options: [
      { label: "Myself", scores: { freshClean: 1, muskSoft: 1, sweetAttractive: 1, amberWarm: 1, floralElegant: 1, oudLuxury: 1 } },
      { label: "Husband", scores: { oudLuxury: 2, amberWarm: 1, freshClean: 1 } },
      { label: "Wife", scores: { floralElegant: 2, sweetAttractive: 1 } },
      { label: "Family gift", scores: { floralElegant: 1, oudLuxury: 1, muskSoft: 1 } },
      { label: "Friend", scores: { freshClean: 1, muskSoft: 1, sweetAttractive: 1 } },
      { label: "Not sure", scores: { floralElegant: 1, freshClean: 1, muskSoft: 1 } },
    ],
  },
  {
    id: "budget",
    tag: "Budget",
    text: "What is your preferred budget?",
    helper: "We use this to tailor the final WhatsApp recommendation request.",
    options: [
      { label: "Below QAR 100", scores: { freshClean: 1, muskSoft: 1 } },
      { label: "QAR 100-150", scores: { floralElegant: 1, freshClean: 1, muskSoft: 1 } },
      { label: "QAR 150-250", scores: { sweetAttractive: 1, amberWarm: 1, floralElegant: 1 } },
      { label: "Premium gifting range", scores: { oudLuxury: 2, floralElegant: 1 } },
    ],
  },
];

const appState = {
  currentStep: -1,
  answers: [],
};

const screens = {
  welcome: document.querySelector('[data-screen="welcome"]'),
  question: document.querySelector('[data-screen="question"]'),
  result: document.querySelector('[data-screen="result"]'),
};

const stepLabel = document.getElementById("stepLabel");
const progressFill = document.getElementById("progressFill");
const progressBar = document.querySelector(".progress-bar");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const questionHelper = document.getElementById("questionHelper");
const optionsContainer = document.getElementById("optionsContainer");
const questionCard = document.getElementById("questionCard");

const resultName = document.getElementById("resultName");
const resultDescription = document.getElementById("resultDescription");
const resultPersonality = document.getElementById("resultPersonality");
const resultFamilyChips = document.getElementById("resultFamilyChips");
const resultBestForChips = document.getElementById("resultBestForChips");
const summaryBudget = document.getElementById("summaryBudget");
const summaryRecipient = document.getElementById("summaryRecipient");
const whatsAppButton = document.getElementById("whatsAppButton");

document.getElementById("startButton").addEventListener("click", startAssessment);
document.getElementById("backButton").addEventListener("click", goBack);
document.getElementById("restartButton").addEventListener("click", restartAssessment);
document.getElementById("restartResultButton").addEventListener("click", restartAssessment);
document.getElementById("editAnswersButton").addEventListener("click", () => {
  appState.currentStep = questions.length - 1;
  renderQuestion();
  showScreen("question");
});

function startAssessment() {
  appState.currentStep = 0;
  appState.answers = [];
  renderQuestion();
  showScreen("question");
}

function restartAssessment() {
  appState.currentStep = -1;
  appState.answers = [];
  showScreen("welcome");
}

function goBack() {
  if (appState.currentStep <= 0) {
    restartAssessment();
    return;
  }

  appState.answers = appState.answers.slice(0, appState.currentStep - 1);
  appState.currentStep -= 1;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[appState.currentStep];
  const progressPercent = ((appState.currentStep + 1) / questions.length) * 100;

  stepLabel.textContent = `Question ${appState.currentStep + 1} of ${questions.length}`;
  questionTag.textContent = question.tag;
  questionText.textContent = question.text;
  questionHelper.textContent = question.helper;
  progressFill.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", String(Math.round(progressPercent)));

  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `<span>${option.label}</span>`;
    button.addEventListener("click", () => selectAnswer(optionIndex));
    optionsContainer.appendChild(button);
  });

  // Restart the card animation on each question change.
  questionCard.animate(
    [
      { opacity: 0.55, transform: "translateY(14px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 280, easing: "ease-out" }
  );
}

function selectAnswer(optionIndex) {
  appState.answers[appState.currentStep] = optionIndex;

  if (appState.currentStep === questions.length - 1) {
    renderResult();
    showScreen("result");
    return;
  }

  appState.currentStep += 1;
  renderQuestion();
}

function calculateResultKey() {
  const totals = Object.keys(scentProfiles).reduce((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {});

  appState.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([profile, points]) => {
      totals[profile] += points;
    });
  });

  const highestScore = Math.max(...Object.values(totals));
  const tiedProfiles = Object.keys(totals).filter((key) => totals[key] === highestScore);

  if (tiedProfiles.length === 1) {
    return tiedProfiles[0];
  }

  const firstAnswer = questions[0].options[appState.answers[0]];
  if (firstAnswer?.tieKey && tiedProfiles.includes(firstAnswer.tieKey)) {
    return firstAnswer.tieKey;
  }

  const secondAnswer = questions[1].options[appState.answers[1]];
  if (secondAnswer?.tieKey && tiedProfiles.includes(secondAnswer.tieKey)) {
    return secondAnswer.tieKey;
  }

  return tiedProfiles[0];
}

function renderResult() {
  const resultKey = calculateResultKey();
  const result = scentProfiles[resultKey];
  const budgetAnswer = getAnswerLabel("budget");
  const recipientAnswer = getAnswerLabel("recipient");

  resultName.textContent = result.name;
  resultDescription.textContent = result.description;
  resultPersonality.textContent = result.personality;
  renderChips(resultFamilyChips, result.family);
  renderChips(resultBestForChips, result.bestFor);
  summaryBudget.textContent = budgetAnswer;
  summaryRecipient.textContent = recipientAnswer;
  whatsAppButton.href = buildWhatsAppLink(result.name, budgetAnswer, recipientAnswer);
}

function renderChips(container, sourceText) {
  container.innerHTML = "";

  sourceText.split("|").forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "result-chip";
    chip.textContent = item.trim();
    container.appendChild(chip);
  });
}

function buildWhatsAppLink(result, budget, recipient) {
  const message = [
    "Hi, I completed the Signature Scent Finder.",
    `My result is: ${result}.`,
    `My budget is: ${budget}.`,
    `This perfume is for: ${recipient}.`,
    "Please suggest perfumes available for delivery in Qatar.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getAnswerLabel(questionId) {
  const questionIndex = questions.findIndex((question) => question.id === questionId);
  const answerIndex = appState.answers[questionIndex];
  return questions[questionIndex].options[answerIndex].label;
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("active", name === screenName);
  });
}
