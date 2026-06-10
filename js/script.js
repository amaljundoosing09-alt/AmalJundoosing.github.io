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
        localStorage.setItem('theme', 'light');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      } else {
        document.body.classList.remove('light-mode');
        themeToggle.classList.add('dark-mode');
        themeToggle.classList.remove('light-mode');
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