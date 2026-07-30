  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainContainer = document.getElementById('main-container');
    const rightWrapper = document.querySelector('.right-wrapper');

    mobileMenuToggle.addEventListener('click', function () {
      mobileMenuToggle.classList.toggle('active');
      mainContainer.classList.toggle('menu-open');
      rightWrapper.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on overlay or a link
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        if (!rightWrapper.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          if (mainContainer.classList.contains('menu-open')) {
            mobileMenuToggle.classList.remove('active');
            mainContainer.classList.remove('menu-open');
            rightWrapper.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
        }
      }
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        mobileMenuToggle.classList.remove('active');
        mainContainer.classList.remove('menu-open');
        rightWrapper.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });

    // ==================== Dark/Light Mode Toggle ====================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const socialIcon = document.querySelectorAll('.social-img');

    // ==================== Language Toggle ====================
    const langToggle = document.getElementById('langToggle');
    const translations = {
      en: {
        pageTitle: 'My Portfolio',
        menuLabel: 'Toggle menu',
        themeLabel: 'Toggle dark/light mode',
        langButtonLabel: 'Switch to French',
        summary: 'MBA-qualified Project Management professional with expertise in Agile delivery, technical leadership, and cross-functional team coordination. Experienced in Scrum facilitation, workflow optimization, risk management, and aligning business goals with engineering execution to deliver efficient and predictable project outcomes.',
        classLabel: 'Class',
        infoLabel: 'Information',
        experienceLabel: 'Experience',
        educationLabel: 'Education',
        platformsLabel: 'PLATFORMS()',
        languagesLabel: 'LANGAGES()',
        toolsLabel: 'TOOLS()',
        projectManagementLabel: 'PROJECT MANAGEMENT COMPETENCIES()',
        onlinePlatformsLabel: 'Online platforms',
        interestsLabel: 'Interests',
        languageProficiencyLabel: 'LANGUAGE PROFICIENCY()',
        strengthsLabel: 'STRENGTHS()',
        npmLabel: 'USE NPM TO DOWNLOAD CV()',
        installGlobalLabel: 'Install globally',
        runDownloadLabel: 'Then run to download PDF',
        languageGuideLabel: 'Click each language to explore its level and context',
        englishDescription: 'Business communication, presentations, documentation, and collaboration in international environments.',
        frenchDescription: 'Professional working proficiency for meetings, stakeholder interaction, and day-to-day communication.',
        creoleDescription: 'Strong cultural and conversational fluency for community, personal, and informal professional settings.',
        strengthText: 'Leadership & Decision-Making, Stakeholder Communication, Strategic & Analytical Thinking, Multi-Project Management, Results-Driven Mindset, Continuous Learning & Growth',
        contactName: 'Name',
        contactPhone: 'Phone Number',
        contactEmail: 'Email',
        contactAddress: 'Address',
        mission: 'Committed to driving strategic initiatives, fostering collaborative team environments, and delivering measurable project outcomes that contribute to organizational success.',
        copyright: '© 2026 All Rights Reserved to Leeladharsing Amal Jundoosing',
        jobIpedisTitle: 'Accessibility Consultant',
        jobDayforceTitle: 'Software Developer III',
        jobDayforceTestTitle: 'Software Engineer in Test',
        jobAmbrexTitle: 'Webmaster / Developer',
        jobTesterTitle: 'Tester',
        jobProdigiousTitle: 'Front-End Engineer',
        jobJiniTitle: 'Trainee Android Developer',
        jobSedecoTitle: 'Trainee Software Developer',
        jobVeslTitle: 'Trainee Software Developer',
        languagesTitle: 'Language proficiency',
        englishLabel: 'English',
        frenchLabel: 'French',
        creoleLabel: 'Creole',
        fluentLabel: '// Fluent',
        nativeLabel: '// Native',
        universityUtmLabel: 'University of Technology, Mauritius',
        utmDegree: 'MBA in Project Management',
        universityUdmLabel: 'Université des Mascareignes',
        udmDegree: 'BSc in Software Engineering and Diplôme d’Université',
        udmDiplomaDegree: 'Diploma/DUST in Software Engineering',
        pdhLabel: 'Palmdale High School California USA',
        pdhDegree: 'High School Diploma',
        cjhLabel: 'Cactus Junior High School California USA',
        cjhDegree: 'Junior High School Diploma'
      },
      fr: {
        pageTitle: 'Mon portfolio',
        menuLabel: 'Basculer le menu',
        themeLabel: 'Basculer en mode sombre/clair',
        langButtonLabel: 'Passer en anglais',
        summary: 'Professionnel en gestion de projet avec un MBA, spécialisé dans la livraison agile, le leadership technique et la coordination d’équipes transversales. Expérimenté en facilitation Scrum, optimisation des workflows, gestion des risques et alignement des objectifs métiers avec l’exécution technique pour obtenir des résultats efficaces et prévisibles.',
        classLabel: 'Classe',
        infoLabel: 'Informations',
        experienceLabel: 'Expérience',
        educationLabel: 'Éducation',
        platformsLabel: 'PLATEFORMES()',
        languagesLabel: 'LANGAGES()',
        toolsLabel: 'OUTILS()',
        projectManagementLabel: 'COMPÉTENCES EN GESTION DE PROJET()',
        onlinePlatformsLabel: 'Plateformes en ligne',
        interestsLabel: 'Centres d’intérêt',
        languageProficiencyLabel: 'NIVEAU DE LANGUE()',
        strengthsLabel: 'POINTS FORTS()',
        npmLabel: 'UTILISER NPM POUR TÉLÉCHARGER LE CV()',
        installGlobalLabel: 'Installer globalement',
        runDownloadLabel: 'Puis exécuter pour télécharger le PDF',
        languageGuideLabel: 'Cliquez sur chaque langue pour découvrir son niveau et son contexte',
        englishDescription: 'Communication professionnelle, présentations, documentation et collaboration dans des environnements internationaux.',
        frenchDescription: 'Compétence professionnelle utile pour les réunions, l’interaction avec les parties prenantes et la communication quotidienne.',
        creoleDescription: 'Bonne fluidité culturelle et conversationnelle pour la communauté, la vie personnelle et les contextes professionnels informels.',
        strengthText: 'Leadership et prise de décision, communication avec les parties prenantes, pensée stratégique et analytique, gestion de plusieurs projets, état d’esprit orienté résultats, apprentissage et croissance continus',
        contactName: 'Nom',
        contactPhone: 'Numéro de téléphone',
        contactEmail: 'E-mail',
        contactAddress: 'Adresse',
        mission: 'Engagé à impulser des initiatives stratégiques, à favoriser des environnements de travail collaboratifs et à livrer des résultats mesurables qui contribuent au succès de l’organisation.',
        copyright: '© 2026 Tous droits réservés à Leeladharsing Amal Jundoosing',
        jobIpedisTitle: 'Consultant en accessibilité',
        jobDayforceTitle: 'Développeur logiciel III',
        jobDayforceTestTitle: 'Ingénieur logiciel en test',
        jobAmbrexTitle: 'Webmaster / Développeur',
        jobTesterTitle: 'Testeur',
        jobProdigiousTitle: 'Ingénieur Front-End',
        jobJiniTitle: 'Développeur Android stagiaire',
        jobSedecoTitle: 'Développeur logiciel stagiaire',
        jobVeslTitle: 'Développeur logiciel stagiaire',
        languagesTitle: 'Niveau de langue',
        englishLabel: 'Anglais',
        frenchLabel: 'Français',
        creoleLabel: 'Créole',
        fluentLabel: '// Courant',
        nativeLabel: '// Langue maternelle',
        universityUtmLabel: 'Université de Technologie, Maurice',
        utmDegree: 'MBA en gestion de projet',
        universityUdmLabel: 'Université des Mascareignes',
        udmDegree: 'BSc en ingénierie logicielle et Diplôme d’Université',
        udmDiplomaDegree: 'Diplôme/DUST en ingénierie logicielle',
        pdhLabel: 'Lycée Palmdale Californie États-Unis',
        pdhDegree: 'Diplôme d’études secondaires',
        cjhLabel: 'Collège Cactus Californie États-Unis',
        cjhDegree: 'Diplôme de collège'
      }
    };

    function applyLanguage(language) {
      const selectedLanguage = translations[language] ? language : 'en';
      document.documentElement.lang = selectedLanguage;
      document.documentElement.setAttribute('data-language', selectedLanguage);
      document.title = translations[selectedLanguage].pageTitle;

      document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[selectedLanguage][key]) {
          element.textContent = translations[selectedLanguage][key];
        }
      });

      document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const key = element.dataset.i18nAria;
        if (translations[selectedLanguage][key]) {
          element.setAttribute('aria-label', translations[selectedLanguage][key]);
        }
      });

      document.querySelectorAll('[data-i18n-title]').forEach((element) => {
        const key = element.dataset.i18nTitle;
        if (translations[selectedLanguage][key]) {
          element.setAttribute('title', translations[selectedLanguage][key]);
        }
      });

      if (langToggle) {
        langToggle.textContent = selectedLanguage === 'fr' ? 'EN' : 'FR';
        langToggle.setAttribute('aria-label', translations[selectedLanguage].langButtonLabel);
        langToggle.setAttribute('title', translations[selectedLanguage].langButtonLabel);
      }

      localStorage.setItem('language', selectedLanguage);
    }

    function initializeLanguage() {
      const savedLanguage = localStorage.getItem('language') || 'en';
      applyLanguage(savedLanguage);
    }

    if (langToggle) {
      langToggle.addEventListener('click', function () {
        const currentLanguage = localStorage.getItem('language') || 'en';
        const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        applyLanguage(nextLanguage);
      });
    }

    initializeLanguage();

    // Initialize theme from localStorage or system preference
    function initializeTheme() {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      applyTheme(savedTheme);
    }

    // Apply theme to the document
    function applyTheme(theme) {
      if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.classList.add('light-mode');
        themeToggle.classList.remove('dark-mode');
        socialIcon.forEach(icon => icon.classList.remove('dark-mode'));

        localStorage.setItem('theme', 'light');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      } else {
        document.body.classList.remove('light-mode');
        themeToggle.classList.add('dark-mode');
        themeToggle.classList.remove('light-mode');
        socialIcon.forEach(icon => icon.classList.add('dark-mode'));
        localStorage.setItem('theme', 'dark');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
      }
    }

    // Toggle theme
    themeToggle.addEventListener('click', function () {
      const currentTheme = localStorage.getItem('theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });

    // Initialize theme on page load
    initializeTheme();