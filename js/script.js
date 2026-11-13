const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainContainer = document.getElementById("main-container");
const rightWrapper = document.querySelector(".right-wrapper");

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("active");
  mainContainer.classList.toggle("menu-open");
  rightWrapper.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close menu when clicking on overlay or a link
document.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    if (
      !rightWrapper.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)
    ) {
      if (mainContainer.classList.contains("menu-open")) {
        mobileMenuToggle.classList.remove("active");
        mainContainer.classList.remove("menu-open");
        rightWrapper.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    }
  }
});

// Close menu on resize to desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    mobileMenuToggle.classList.remove("active");
    mainContainer.classList.remove("menu-open");
    rightWrapper.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});

// ==================== Dark/Light Mode Toggle ====================
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;
const socialIcon = document.querySelectorAll(".social-img");

// ==================== Language Toggle ====================
const langToggle = document.getElementById("langToggle");
const translations = {
  en: {
    pageTitle: "My Portfolio",
    menuLabel: "Toggle menu",
    themeLabel: "Toggle dark/light mode",
    langButtonLabel: "Switch to French",
    summary:
      "MBA-qualified Project Management professional with expertise in Agile delivery, technical leadership, and cross-functional team coordination. Experienced in Scrum facilitation, workflow optimization, risk management, and aligning business goals with engineering execution to deliver efficient and predictable project outcomes.",
    classLabel: "Class",
    infoLabel: "Information",
    experienceLabel: "Experience",
    educationLabel: "Education",
    platformsLabel: "PLATFORMS()",
    languagesLabel: "LANGAGES()",
    toolsLabel: "TOOLS()",
    projectManagementLabel: "PROJECT MANAGEMENT COMPETENCIES()",
    onlinePlatformsLabel: "Online platforms",
    interestsLabel: "Interests",
    languageProficiencyLabel: "LANGUAGE PROFICIENCY()",
    strengthsLabel: "STRENGTHS()",
    npmLabel: "USE NPM TO DOWNLOAD CV()",
    installGlobalLabel: "Install globally",
    runDownloadLabel: "Then run to download PDF",
    languageGuideLabel: "Click each language to explore its level and context",
    englishDescription:
      "Business communication, presentations, documentation, and collaboration in international environments.",
    frenchDescription:
      "Professional working proficiency for meetings, stakeholder interaction, and day-to-day communication.",
    creoleDescription:
      "Strong cultural and conversational fluency for community, personal, and informal professional settings.",
    strengthText:
      "Leadership & Decision-Making, Stakeholder Communication, Strategic & Analytical Thinking, Multi-Project Management, Results-Driven Mindset, Continuous Learning & Growth",
    contactName: "Name",
    contactPhone: "Phone Number",
    contactEmail: "Email",
    contactAddress: "Address",
    mission:
      "Committed to driving strategic initiatives, fostering collaborative team environments, and delivering measurable project outcomes that contribute to organizational success.",
    copyright: "© 2026 All Rights Reserved to Leeladharsing Amal Jundoosing",
    jobIpedisTitle: "Accessibility Consultant",
    jobIpedisDescription:
      "Accessibility professional experienced in leading WCAG compliance initiatives, conducting accessibility audits, and improving usability across web applications. Skilled in accessibility consulting, stakeholder collaboration, semantic HTML review, keyboard navigation, screen reader compatibility, and translating business requirements into inclusive, user-friendly solutions.",
    jobDayforceTitle: "Software Developer III",
    jobDayforceDescription:
      "Full-stack developer with experience in building scalable web applications with HTML, CSS, TypeScript, .NET, and React.js. Skilled in Agile delivery, Scrum facilitation, CI/CD automation, backlog refinement, technical risk management, and cross-functional collaboration. Strong background in stakeholder communication, accessibility compliance, workflow optimization, and aligning engineering execution with business objectives.",
    jobDayforceTestTitle: "Software Engineer in Test",
    jobDayforceTestDescription:
      "QA Automation Engineer with experience in SpecFlow, FitNesse, and C# (.NET) test automation. Skilled in manual and automated testing for React-based applications, collaborating with development teams, and supporting reliable Agile release cycles.",
    jobAmbrexTitle: "Webmaster / Developer",
    jobAmbrexDescription:
      "E-commerce specialist experienced in managing and optimizing Shopify websites using PageFly. Skilled in conversion-focused upsell and cross-sell strategies, visual design, and Adobe Photoshop content optimization.",
    jobTesterTitle: "Tester",
    jobTesterDescription:
      "QA Analyst experienced in manual testing, defect tracking with Jira Xray, and Agile collaboration. Skilled in user story refinement, feature validation, and maintaining clear project documentation in Confluence.",
    jobProdigiousTitle: "Front-End Engineer",
    jobProdigiousDescription:
      "Front-End Engineer experienced in building responsive web applications using HTML, CSS, Sass, JavaScript, React.js, Node.js, and Tailwind CSS. Skilled in Shopify development, CMS integrations, SEO optimization, client communication, and delivering scalable digital solutions across platforms including WordPress, Drupal, Symfony, Typo3, and Salesforce Page Designer.",
    jobJiniTitle: "Trainee Android Developer",
    jobSedecoTitle: "Trainee Software Developer",
    jobVeslTitle: "Trainee Software Developer",
    languagesTitle: "Language proficiency",
    englishLabel: "English",
    frenchLabel: "French",
    creoleLabel: "Creole",
    fluentLabel: "// Fluent",
    nativeLabel: "// Native",
    universityUtmLabel: "University of Technology, Mauritius",
    utmDegree: "MBA in Project Management",
    universityUdmLabel: "Université des Mascareignes",
    udmDegree: "BSc in Software Engineering and Diplôme d’Université",
    udmDiplomaDegree: "Diploma/DUST in Software Engineering",
    pdhLabel: "Palmdale High School California USA",
    pdhDegree: "High School Diploma",
    cjhLabel: "Cactus Junior High School California USA",
    cjhDegree: "Junior High School Diploma",
  },
  fr: {
    pageTitle: "Mon portfolio",
    menuLabel: "Basculer le menu",
    themeLabel: "Basculer en mode sombre/clair",
    langButtonLabel: "Passer en anglais",
    summary:
      "Professionnel en gestion de projet avec un MBA, spécialisé dans la livraison agile, le leadership technique et la coordination d’équipes transversales. Expérimenté en facilitation Scrum, optimisation des workflows, gestion des risques et alignement des objectifs métiers avec l’exécution technique pour obtenir des résultats efficaces et prévisibles.",
    classLabel: "Classe",
    infoLabel: "Informations",
    experienceLabel: "Expérience",
    educationLabel: "Éducation",
    platformsLabel: "PLATEFORMES()",
    languagesLabel: "LANGAGES()",
    toolsLabel: "OUTILS()",
    projectManagementLabel: "COMPÉTENCES EN GESTION DE PROJET()",
    onlinePlatformsLabel: "Plateformes en ligne",
    interestsLabel: "Centres d’intérêt",
    languageProficiencyLabel: "NIVEAU DE LANGUE()",
    strengthsLabel: "POINTS FORTS()",
    npmLabel: "UTILISER NPM POUR TÉLÉCHARGER LE CV()",
    installGlobalLabel: "Installer globalement",
    runDownloadLabel: "Puis exécuter pour télécharger le PDF",
    languageGuideLabel:
      "Cliquez sur chaque langue pour découvrir son niveau et son contexte",
    englishDescription:
      "Communication professionnelle, présentations, documentation et collaboration dans des environnements internationaux.",
    frenchDescription:
      "Compétence professionnelle utile pour les réunions, l’interaction avec les parties prenantes et la communication quotidienne.",
    creoleDescription:
      "Bonne fluidité culturelle et conversationnelle pour la communauté, la vie personnelle et les contextes professionnels informels.",
    strengthText:
      "Leadership et prise de décision, communication avec les parties prenantes, pensée stratégique et analytique, gestion de plusieurs projets, état d’esprit orienté résultats, apprentissage et croissance continus",
    contactName: "Nom",
    contactPhone: "Numéro de téléphone",
    contactEmail: "E-mail",
    contactAddress: "Adresse",
    mission:
      "Engagé à impulser des initiatives stratégiques, à favoriser des environnements de travail collaboratifs et à livrer des résultats mesurables qui contribuent au succès de l’organisation.",
    copyright: "© 2026 Tous droits réservés à Leeladharsing Amal Jundoosing",
    jobIpedisTitle: "Consultant en accessibilité",
    jobIpedisDescription:
      "Professionnel de l’accessibilité expérimenté dans la mise en œuvre d’initiatives de conformité WCAG, la réalisation d’audits d’accessibilité et l’amélioration de l’utilisabilité des applications web. Compétent en conseil en accessibilité, collaboration avec les parties prenantes, revue du HTML sémantique, navigation au clavier, compatibilité avec les lecteurs d’écran et traduction des besoins métiers en solutions inclusives et faciles à utiliser.",
    jobDayforceTitle: "Développeur logiciel III",
    jobDayforceDescription:
      "Développeur full-stack expérimenté dans la création d’applications web évolutives avec HTML, CSS, TypeScript, .NET et React.js. Compétent dans la livraison agile, la facilitation Scrum, l’automatisation CI/CD, l’affinage du backlog, la gestion des risques techniques et la collaboration interfonctionnelle. Solide expérience en communication avec les parties prenantes, conformité en accessibilité, optimisation des workflows et alignement de l’exécution technique avec les objectifs métiers.",
    jobDayforceTestTitle: "Ingénieur logiciel en test",
    jobDayforceTestDescription:
      "Ingénieur QA Automation avec expérience en automatisation de tests SpecFlow, FitNesse et C# (.NET). Compétent dans les tests manuels et automatisés d’applications React, la collaboration avec les équipes de développement et le support de cycles de livraison Agile fiables.",
    jobAmbrexTitle: "Webmaster / Développeur",
    jobAmbrexDescription:
      "Spécialiste e-commerce expérimenté dans la gestion et l’optimisation de sites Shopify avec PageFly. Compétent dans les stratégies d’upsell et cross-sell orientées conversion, le design visuel et l’optimisation de contenu avec Adobe Photoshop.",
    jobTesterTitle: "Testeur",
    jobTesterDescription:
      "Analyste QA expérimenté dans les tests manuels, le suivi des défauts avec Jira Xray et la collaboration Agile. Compétent dans l’affinage des user stories, la validation des fonctionnalités et la tenue d’une documentation claire de projet dans Confluence.",
    jobProdigiousTitle: "Ingénieur Front-End",
    jobProdigiousDescription:
      "Ingénieur Front-End expérimenté dans la création d’applications web responsives avec HTML, CSS, Sass, JavaScript, React.js, Node.js et Tailwind CSS. Compétent dans le développement Shopify, les intégrations CMS, l’optimisation SEO, la communication client et la livraison de solutions numériques évolutives sur des plateformes telles que WordPress, Drupal, Symfony, Typo3 et Salesforce Page Designer.",
    jobJiniTitle: "Développeur Android stagiaire",
    jobSedecoTitle: "Développeur logiciel stagiaire",
    jobVeslTitle: "Développeur logiciel stagiaire",
    languagesTitle: "Niveau de langue",
    englishLabel: "Anglais",
    frenchLabel: "Français",
    creoleLabel: "Créole",
    fluentLabel: "// Courant",
    nativeLabel: "// Langue maternelle",
    universityUtmLabel: "Université de Technologie, Maurice",
    utmDegree: "MBA en gestion de projet",
    universityUdmLabel: "Université des Mascareignes",
    udmDegree: "BSc en ingénierie logicielle et Diplôme d’Université",
    udmDiplomaDegree: "Diplôme/DUST en ingénierie logicielle",
    pdhLabel: "Lycée Palmdale Californie États-Unis",
    pdhDegree: "Diplôme d’études secondaires",
    cjhLabel: "Collège Cactus Californie États-Unis",
    cjhDegree: "Diplôme de collège",
  },
};

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = selectedLanguage;
  document.documentElement.setAttribute("data-language", selectedLanguage);
  document.title = translations[selectedLanguage].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selectedLanguage][key]) {
      element.textContent = translations[selectedLanguage][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (translations[selectedLanguage][key]) {
      element.setAttribute("aria-label", translations[selectedLanguage][key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;
    if (translations[selectedLanguage][key]) {
      element.setAttribute("title", translations[selectedLanguage][key]);
    }
  });

  if (langToggle) {
    langToggle.textContent = selectedLanguage === "fr" ? "EN" : "FR";
    langToggle.setAttribute(
      "aria-label",
      translations[selectedLanguage].langButtonLabel,
    );
    langToggle.setAttribute(
      "title",
      translations[selectedLanguage].langButtonLabel,
    );
  }

  localStorage.setItem("language", selectedLanguage);
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem("language") || "en";
  applyLanguage(savedLanguage);
}

if (langToggle) {
  langToggle.addEventListener("click", function () {
    const currentLanguage = localStorage.getItem("language") || "en";
    const nextLanguage = currentLanguage === "fr" ? "en" : "fr";
    applyLanguage(nextLanguage);
  });
}

initializeLanguage();

// Initialize theme from localStorage or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
}

// Apply theme to the document
function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.classList.add("light-mode");
    themeToggle.classList.remove("dark-mode");
    socialIcon.forEach((icon) => icon.classList.remove("dark-mode"));

    localStorage.setItem("theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.classList.add("dark-mode");
    themeToggle.classList.remove("light-mode");
    socialIcon.forEach((icon) => icon.classList.add("dark-mode"));
    localStorage.setItem("theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  }

  if (ctx && c) {
    ctx.clearRect(0, 0, c.width, c.height);
  }
}

// Toggle theme
themeToggle.addEventListener("click", function () {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// Initialize theme on page load
initializeTheme();

// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

// window.addEventListener("resize", function () {
//   c.height = window.innerHeight;
//   c.width = window.innerWidth;
//   columns = c.width / font_size;
//   drops = [];
//   for (var x = 0; x < columns; x++) drops[x] = 1;
// });

function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    columns = Math.floor(c.width / font_size);

    drops = [];

    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }
}

// Normal browser resize
window.addEventListener("resize", resizeCanvas);

// iPhone Safari viewport resize
if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", resizeCanvas);
}

// Initial setup
resizeCanvas();

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  const isLightMode = document.body.classList.contains("light-mode");
  ctx.fillStyle = isLightMode
    ? "rgba(244, 250, 246, 0.08)"
    : "rgba(11, 18, 32, 0.08)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = isLightMode ? "#047857" : "#34D399";
  ctx.globalAlpha = isLightMode ? 0.45 : 0.38;
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
  ctx.globalAlpha = 1;
}

setInterval(draw, 35);
