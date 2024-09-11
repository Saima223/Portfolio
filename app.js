  // Add scrolled class to navbar on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Updated Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  // Function to update icon visibility
  function updateIcons(isDarkMode) {
    sunIcon.style.display = isDarkMode ? 'none' : 'inline-block';
    moonIcon.style.display = isDarkMode ? 'inline-block' : 'none';
  }

  // Check for saved user preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    updateIcons(true);
  } else {
    updateIcons(false);
  }

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      updateIcons(true);
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
      updateIcons(false);
    }
  });