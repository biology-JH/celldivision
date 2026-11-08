const mcq = (prompt, options, explanation, correct = 0) => ({ prompt, options, explanation, correct });

const lessons = [
  {
    code: "17.2.1",
    unit: "Mitosis",
    nav: "Define mitosis",
    title: "Nuclear division makes genetically identical cells.",
    copy: "Mitosis is division of the nucleus. Each daughter cell receives the same genetic information and chromosome number as the parent cell.",
    key: "Mitosis makes identical body cells; meiosis makes genetically different gametes.",
    note: "The syllabus focuses on the outcome; detailed stages of mitosis are not required.",
    imageLayout: "stack",
    images: [
      { src: "mitosis-outcome.webp", alt: "One parent cell dividing to form two genetically identical daughter cells", caption: "One parent cell produces two daughter cells.", style: "diagram" },
      { src: "mitosis-daughters.webp", alt: "Two daughter cells containing the same chromosome set", caption: "Each daughter keeps the same chromosome number.", style: "diagram" }
    ],
    questions: [
      mcq("What is mitosis?", ["Nuclear division that produces genetically identical cells", "Reduction division that makes gametes", "Specialisation without cell division", "Fusion of two reproductive cells"], "Mitosis is nuclear division that produces genetically identical daughter cells."),
      mcq("What do daughter cells inherit after mitosis?", ["The same genetic information and chromosome number as the parent", "Half the parent cell’s chromosomes", "A new and unrelated set of genes", "No chromosomes until fertilisation"], "Each daughter cell receives the same genetic information and chromosome number as the parent.")
    ]
  },
  {
    code: "17.2.2",
    unit: "Mitosis",
    nav: "Roles",
    title: "Mitosis supports growth, repair, replacement and asexual reproduction.",
    copy: "It adds cells as an organism grows, repairs damaged tissue, replaces worn-out cells and can produce clonal offspring from one parent.",
    facts: [
      { label: "Growth", value: "A zygote builds a multicellular organism." },
      { label: "Repair", value: "New cells replace damaged tissue." },
      { label: "Replacement", value: "Worn-out cells are renewed." },
      { label: "Asexual reproduction", value: "One parent can make clones." }
    ],
    imageLayout: "gallery-three",
    images: [
      { src: "runner.jpg", alt: "A strawberry runner forming a new plant", caption: "Plant runners", style: "photo" },
      { src: "potato.jpg", alt: "Potatoes sprouting from their eyes", caption: "Potato tubers", style: "photo" },
      { src: "hydra.webp", alt: "A Hydra with a small bud growing from its body", caption: "Budding Hydra", style: "diagram" }
    ],
    note: "These asexual offspring are clones of the parent.",
    questions: [
      mcq("Which set lists the roles of mitosis in the syllabus?", ["Growth, repair, replacement and asexual reproduction", "Digestion, breathing, fertilisation and movement", "Gamete production, variation, respiration and growth", "Protein synthesis, diffusion, circulation and repair"], "The four roles are growth, repair of damaged tissues, replacement of cells and asexual reproduction."),
      mcq("Why are offspring from asexual reproduction usually genetically identical to the parent?", ["They are made from one parent by mitosis", "They inherit chromosomes from two gametes", "Meiosis copies every chromosome exactly", "Fertilisation combines two different cells"], "Mitosis makes genetically identical cells, and asexual reproduction involves one parent.")
    ]
  },
  {
    code: "17.2.3",
    unit: "Mitosis",
    nav: "Copy first",
    title: "Chromosomes replicate exactly before mitosis.",
    copy: "DNA is copied during interphase. Each replicated chromosome consists of two identical sister chromatids joined at a centromere.",
    key: "Copy first. Divide second.",
    imageLayout: "single",
    images: [
      { src: "chromosome-copy.webp", alt: "A chromosome before and after exact replication", caption: "One chromosome is copied before it divides.", style: "diagram" }
    ],
    questions: [
      mcq("When does exact chromosome replication happen?", ["Before mitosis, during interphase", "After the daughter cells form", "During fertilisation", "Only in gametes"], "Chromosome DNA is copied during interphase, before mitosis."),
      mcq("A replicated chromosome consists of two identical…", ["sister chromatids joined at a centromere", "gametes joined at a nucleus", "daughter cells joined at a membrane", "unrelated chromosomes joined at a pole"], "The identical copies are sister chromatids, joined at the centromere.")
    ]
  },
  {
    code: "17.2.4",
    unit: "Mitosis",
    nav: "Separate",
    title: "Chromosome copies separate, so chromosome number stays constant.",
    copy: "During mitosis, the chromosome copies move to opposite poles. Each daughter cell receives one copy of every chromosome.",
    key: "Human body cell: 46 chromosomes → 46 in each daughter cell.",
    imageLayout: "single",
    images: [
      { src: "chromatid-separation.webp", alt: "Chromosome copies separating to opposite poles of a dividing cell", caption: "One copy of each chromosome goes to each daughter cell.", style: "diagram wide" }
    ],
    questions: [
      mcq("What happens to chromosome copies during mitosis?", ["They separate so one copy moves to each daughter cell", "They all move into one daughter cell", "They are removed before division", "They fuse to form one chromosome"], "The chromosome copies separate to opposite poles and are shared between the daughter cells."),
      mcq("A human body cell has 46 chromosomes. How many should each daughter cell have after mitosis?", ["46", "23", "92", "4"], "Each daughter receives one copy of every chromosome, maintaining the number at 46.")
    ]
  },
  {
    code: "17.2.5",
    unit: "Mitosis",
    nav: "Stem cells",
    title: "Stem cells make new cells that can specialise.",
    copy: "Stem cells are unspecialised. They divide by mitosis; daughter cells can self-renew or become specialised for a particular function.",
    key: "Examples of specialised cells: nerve cells, muscle cells and red blood cells.",
    imageLayout: "gallery-two",
    images: [
      { src: "stem-cells.webp", alt: "A stem cell dividing to form daughter cells, one of which becomes specialised", caption: "Stem cells divide; daughter cells can specialise.", style: "diagram" },
      { src: "neuron.webp", alt: "A branching nerve cell with a highlighted cell body", caption: "Nerve cell", style: "photo" },
      { src: "muscle.webp", alt: "A close-up image of muscle tissue fibres", caption: "Muscle tissue", style: "photo" },
      { src: "red-blood-cells.webp", alt: "Red blood cells shown under a microscope", caption: "Red blood cells", style: "photo" }
    ],
    questions: [
      mcq("What is a stem cell?", ["An unspecialised cell that can divide by mitosis", "A mature gamete with half a chromosome set", "A cell that cannot divide", "A specialised cell that has no nucleus"], "Stem cells are unspecialised cells that can divide by mitosis."),
      mcq("What can stem-cell daughter cells do?", ["Self-renew or specialise for a particular function", "Only become gametes", "Lose all their chromosomes", "Divide only by fertilisation"], "Daughter cells may remain stem cells or differentiate into specialised cells.")
    ]
  },
  {
    code: "17.3.1",
    unit: "Meiosis",
    nav: "Gametes",
    title: "Meiosis is involved in the production of gametes.",
    copy: "Gametes are reproductive cells. In animals, meiosis occurs in the testes and ovaries; in flowering plants, it occurs in the anthers and ovules.",
    key: "Sperm and egg cells carry one chromosome set each.",
    imagePosition: "left",
    imageLayout: "single",
    images: [
      { src: "gametes.webp", alt: "A sperm cell approaching an egg cell", caption: "Sperm and egg cells are gametes.", style: "wide" }
    ],
    questions: [
      mcq("Meiosis is involved in producing which cells?", ["Gametes, such as sperm and egg cells", "Only identical body cells", "Muscle and nerve tissues", "A zygote by itself"], "Meiosis is involved in the production of gametes."),
      mcq("Where does meiosis occur in animals and flowering plants?", ["Animal testes and ovaries; plant anthers and ovules", "Animal lungs and hearts; plant roots and leaves", "Animal skin only; plant stems only", "Only in a fertilised egg"], "In animals it occurs in the testes and ovaries; in flowering plants, in the anthers and ovules.")
    ]
  },
  {
    code: "17.3.2",
    unit: "Meiosis",
    nav: "Reduction",
    title: "Meiosis halves chromosome number and makes genetically different cells.",
    copy: "Meiosis is reduction division: a diploid cell (2n) produces haploid cells (n). The four products are genetically different, each with a unique mix of parental genes.",
    key: "Diploid (2n) → haploid (n). Human body cells: 46. Human gametes: 23.",
    facts: [
      { label: "Fruit fly", value: "2n = 8 · n = 4" },
      { label: "Garden pea", value: "2n = 14 · n = 7" },
      { label: "Dog", value: "2n = 78 · n = 39" },
      { label: "Remember", value: "Haploid means one complete set." }
    ],
    imagePosition: "right",
    imageLayout: "stack",
    images: [
      { src: "meiosis-four-cells.webp", alt: "One diploid cell dividing to form four haploid cells", caption: "One starting cell; four different haploid products.", style: "diagram" },
      { src: "fertilisation.jpg", alt: "A sperm cell reaching an egg cell", caption: "Fertilisation joins two gametes.", style: "photo" },
      { src: "variation.webp", alt: "Four genetically different gametes with different chromosome combinations", caption: "Different chromosome combinations create variation.", style: "diagram" }
    ],
    cycle: ["Adult body cells · 2n", "Meiosis", "Gametes · n", "Fertilisation · n + n", "Zygote · 2n", "Mitosis", "Adult"],
    comparison: [
      { label: "Mitosis", value: "Two identical diploid cells" },
      { label: "Meiosis", value: "Four different haploid cells" }
    ],
    note: "Fertilisation restores diploidy: in humans, 23 + 23 = 46. Mitosis then grows the zygote into an adult. Detailed division stages are not required by this syllabus.",
    questions: [
      mcq("Why is meiosis called reduction division?", ["It halves chromosome number from diploid (2n) to haploid (n)", "It doubles chromosome number in each gamete", "It makes two identical diploid cells", "It removes all DNA from the cell"], "Meiosis halves chromosome number from diploid to haploid."),
      mcq("A human body cell has 46 chromosomes. How many are in a human gamete?", ["23", "46", "92", "2"], "A human gamete has one set of 23 chromosomes. Fertilisation restores 46."),
      mcq("Which statement about meiosis products is correct?", ["They are haploid and genetically different", "They are diploid and genetically identical", "They are all body cells with no variation", "They have twice the parent cell’s chromosome number"], "Meiosis produces genetically different haploid cells, adding variation to a population.")
    ]
  }
];

const sectionQuizzes = {
  mitosis: {
    label: "AFTER 17.2 · MITOSIS",
    title: "Mitosis · multiple-choice check",
    questions: [
      mcq("What does mitosis produce?", ["Two genetically identical cells", "Four different haploid cells", "Two gametes", "Four identical gametes"], "Mitosis produces genetically identical cells with the same chromosome number as the parent."),
      mcq("Which set lists the syllabus roles of mitosis?", ["Growth, repair, replacement and asexual reproduction", "Digestion, breathing, fertilisation and movement", "Gamete production, variation, respiration and growth", "Protein synthesis, diffusion, circulation and repair"], "The roles are growth, repair, replacement and asexual reproduction."),
      mcq("When are chromosomes replicated?", ["Before mitosis", "After daughter cells form", "During fertilisation", "Only in gametes"], "Exact chromosome replication occurs before mitosis."),
      mcq("How is chromosome number kept the same in daughter cells?", ["Chromosome copies separate so each daughter gets one of each", "Both copies stay in the parent cell", "The cell loses half its chromosomes", "Each daughter receives a random number"], "Each daughter receives one copy of every chromosome."),
      mcq("Which statement best describes a stem cell?", ["An unspecialised cell that divides by mitosis and can produce specialised cells", "A mature cell that cannot divide", "A haploid gamete", "A chromosome copy"], "Stem cells are unspecialised; daughter cells can become specialised.")
    ]
  },
  meiosis: {
    label: "AFTER 17.3 · MEIOSIS",
    title: "Meiosis · multiple-choice check",
    questions: [
      mcq("Meiosis is involved in producing which cells?", ["Gametes", "Only body cells", "Identical stem cells", "Tissues"], "Meiosis is involved in the production of gametes."),
      mcq("What does reduction division mean?", ["Chromosome number halves from diploid to haploid", "Chromosome number doubles in each gamete", "Two diploid cells form", "DNA is removed from every chromosome"], "Meiosis halves chromosome number, changing cells from diploid (2n) to haploid (n)."),
      mcq("A human body cell has 46 chromosomes. How many are in a human gamete?", ["23", "46", "92", "2"], "A human gamete has one set of 23 chromosomes."),
      mcq("Which cells result from meiosis?", ["Four genetically different haploid cells", "Two identical diploid cells", "One diploid body cell", "Four genetically identical body cells"], "Meiosis produces genetically different cells with a haploid chromosome set."),
      mcq("How does fertilisation restore the diploid chromosome number in humans?", ["23 + 23 chromosomes combine", "46 + 46 chromosomes combine", "A gamete copies itself", "Chromosomes are removed from the zygote"], "A haploid sperm and egg fuse: 23 + 23 restores the diploid total of 46.")
    ]
  }
};

const starterQuestions = [
  mcq("A skin cell divides to repair tissue. What should each new cell receive?", ["The same chromosome number as the parent cell", "Half the parent cell’s chromosomes", "Twice the parent cell’s chromosomes", "No chromosomes until fertilisation"], "Repair uses mitosis, so each new cell receives the same chromosome number as the parent.")
];

const plenaryQuestions = [
  mcq("Which comparison between mitosis and meiosis is correct?", ["Mitosis makes two identical cells; meiosis makes genetically different haploid cells", "Mitosis makes gametes; meiosis repairs tissue", "Both always make two identical cells", "Both halve chromosome number"], "Mitosis makes genetically identical cells; meiosis makes genetically different haploid cells."),
  mcq("In humans, which chromosome numbers restore diploidy at fertilisation?", ["23 + 23 = 46", "46 + 46 = 92", "23 + 46 = 69", "2 + 2 = 4"], "A haploid sperm and egg each contribute 23 chromosomes, restoring 46."),
  mcq("Why can stem cells be useful in growth and tissue repair?", ["They divide by mitosis and can produce cells that specialise", "They halve chromosome number to make gametes", "They destroy damaged chromosomes", "They only form a fertilised egg"], "Stem cells divide by mitosis; daughter cells can specialise for specific functions.")
];

const pointNav = document.getElementById("point-nav");
const mitosisMount = document.getElementById("mitosis-points");
const meiosisMount = document.getElementById("meiosis-points");
const questionBank = Object.create(null);

function renderFacts(facts) {
  if (!facts?.length) return "";
  return `<div class="fact-grid">${facts.map((fact) => `<div class="fact-chip"><strong>${fact.label}</strong>${fact.value}</div>`).join("")}</div>`;
}

function renderImages(images, layout = "single") {
  if (!images?.length) return "";
  const galleryClass = `image-gallery image-gallery--${layout}`;
  return `<div class="${galleryClass}">${images.map((image) => `<figure class="visual-figure ${image.style || "diagram"}"><img src="assets/${image.src}" alt="${image.alt}" loading="lazy" /><figcaption>${image.caption}</figcaption></figure>`).join("")}</div>`;
}

function renderCompare(comparison) {
  if (!comparison?.length) return "";
  return `<div class="compare-block"><h4>Keep the outcomes apart</h4><div class="compare-grid">${comparison.map((item) => `<div class="compare-item"><strong>${item.label}</strong>${item.value}</div>`).join("")}</div></div>`;
}

function renderCycle(cycle) {
  if (!cycle?.length) return "";
  return `<div class="cycle-block"><h4>The life cycle at a glance</h4><div class="cycle-flow">${cycle.map((step, index) => `${index ? '<span class="cycle-arrow" aria-hidden="true">→</span>' : ""}<div class="cycle-step">${step}</div>`).join("")}</div></div>`;
}

function shuffleChoices(question) {
  const choices = question.options.map((text, index) => ({ text, correct: index === question.correct }));
  for (let index = choices.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [choices[index], choices[other]] = [choices[other], choices[index]];
  }
  return choices;
}

function renderMultipleChoice(question, key, questionNumber) {
  const choices = shuffleChoices(question);
  questionBank[key] = question;
  const options = choices.map((choice, index) => {
    const letter = String.fromCharCode(65 + index);
    const optionId = `option-${key}-${letter.toLowerCase()}`;
    return `<label class="mcq-option" for="${optionId}"><input id="${optionId}" type="radio" name="answer-${key}" value="${letter}" data-mcq-choice data-correct="${choice.correct}" /><span class="choice-letter" aria-hidden="true">${letter}</span><span class="choice-copy">${choice.text}</span></label>`;
  }).join("");
  return `<fieldset class="mcq-question" data-mcq-question data-question-key="${key}"><legend>${questionNumber ? `${questionNumber}. ` : ""}${question.prompt}</legend><div class="mcq-options">${options}</div><p class="mcq-feedback" data-mcq-feedback aria-live="polite">Choose A–D.</p></fieldset>`;
}

function renderQuestionGroup(id, title, instructions, questions, variant = "point") {
  const items = questions.map((question, index) => renderMultipleChoice(question, `${id}-q${index + 1}`, index + 1)).join("");
  return `<section class="question-set mcq-group mcq-group--${variant}" id="${id}" data-score-group aria-labelledby="${id}-title"><header class="question-heading"><div><h4 id="${id}-title">${title}</h4><p class="mcq-instructions">${instructions}</p></div><p class="group-question-count">${questions.length} questions</p></header><div class="mcq-list">${items}</div><p class="group-score" data-group-score aria-live="polite">Score: 0 / ${questions.length} · 0 answered</p></section>`;
}

function renderLesson(lesson, index) {
  const imagePosition = lesson.imagePosition === "left" ? " lesson-card--visual-left" : "";
  const wideLayout = lesson.imageLayout?.startsWith("gallery") ? " lesson-card--wide-visual" : "";
  const visualClass = lesson.images?.length ? `lesson-visuals lesson-visuals--${lesson.imageLayout || "single"}` : "";
  const mount = lesson.unit === "Mitosis" ? mitosisMount : meiosisMount;
  const level = "Extended (Supplement)";
  const pointQuestionGroup = renderQuestionGroup(`point-check-${index + 1}`, "Check this point", "Choose A–D. Options shuffle on every visit.", lesson.questions, "point");
  const images = lesson.images?.length ? `<div class="${visualClass}">${renderImages(lesson.images, lesson.imageLayout)}</div>` : "";
  const compare = renderCompare(lesson.comparison);
  const cycle = renderCycle(lesson.cycle);
  const note = lesson.note ? `<div class="note-block"><p>${lesson.note}</p></div>` : "";
  const article = `<article class="lesson-card${imagePosition}${wideLayout}" id="point-${index + 1}" data-lesson="${index + 1}"><div class="lesson-copy"><p class="point-code"><span>${lesson.code} · ${lesson.unit}</span><span class="level-badge">${level}</span></p><h3 class="lesson-title">${lesson.title}</h3><p class="lesson-copy-text">${lesson.copy}</p>${lesson.key ? `<p class="key-line">${lesson.key}</p>` : ""}${renderFacts(lesson.facts)}${note}</div>${images}${compare}${cycle}${pointQuestionGroup}</article>`;
  mount.insertAdjacentHTML("beforeend", article);

  const link = document.createElement("li");
  link.innerHTML = `<a href="#point-${index + 1}" aria-label="${lesson.code}, ${lesson.title}"><span class="nav-number">${lesson.code}</span><span>${lesson.nav}</span></a>`;
  pointNav.append(link);
}

lessons.forEach(renderLesson);

document.getElementById("starter-question").innerHTML = renderQuestionGroup("starter-check", "Make your prediction", "Choose A–D before you begin.", starterQuestions, "starter");
document.getElementById("mitosis-quiz").innerHTML = renderQuestionGroup("mitosis-section-quiz", sectionQuizzes.mitosis.title, `${sectionQuizzes.mitosis.label} · Choose A–D.`, sectionQuizzes.mitosis.questions, "section");
document.getElementById("meiosis-quiz").innerHTML = renderQuestionGroup("meiosis-section-quiz", sectionQuizzes.meiosis.title, `${sectionQuizzes.meiosis.label} · Choose A–D.`, sectionQuizzes.meiosis.questions, "section");
document.getElementById("plenary-questions").innerHTML = renderQuestionGroup("plenary-check", "Three final questions", "Choose A–D to check your understanding.", plenaryQuestions, "plenary");

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches("[data-mcq-choice]")) return;

  const question = input.closest("[data-mcq-question]");
  const definition = questionBank[question.dataset.questionKey];
  const isCorrect = input.dataset.correct === "true";
  question.dataset.answered = "true";
  question.dataset.correct = String(isCorrect);
  question.classList.toggle("is-correct", isCorrect);
  question.classList.toggle("is-incorrect", !isCorrect);

  const correctInput = question.querySelector('input[data-correct="true"]');
  const correctOption = correctInput.closest(".mcq-option");
  const correctLetter = correctOption.querySelector(".choice-letter").textContent;
  const correctText = correctOption.querySelector(".choice-copy").textContent;
  const feedback = question.querySelector("[data-mcq-feedback]");
  feedback.textContent = isCorrect
    ? `Correct. ${definition.explanation}`
    : `Not quite. The correct answer is ${correctLetter}: ${correctText}. ${definition.explanation}`;

  const group = input.closest("[data-score-group]");
  const questions = [...group.querySelectorAll("[data-mcq-question]")];
  const answered = questions.filter((item) => item.dataset.answered === "true").length;
  const score = questions.filter((item) => item.dataset.correct === "true").length;
  group.querySelector("[data-group-score]").textContent = `Score: ${score} / ${questions.length} · ${answered} answered`;
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const current = `#${entry.target.id}`;
      pointNav.querySelectorAll("a").forEach((link) => {
        if (link.getAttribute("href") === current) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
  document.querySelectorAll("[data-lesson]").forEach((section) => observer.observe(section));
}
