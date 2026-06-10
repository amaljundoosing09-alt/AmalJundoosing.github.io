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