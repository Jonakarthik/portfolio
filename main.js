
  window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.bar span');
    
    // Check if the skills section is in view
    const sectionPos = skillsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionPos.top < windowHeight && sectionPos.bottom >= 0) {
      // Add the animation classes
      document.querySelector('.html').classList.add('animated-html');
      document.querySelector('.css').classList.add('animated-css');
      document.querySelector('.js').classList.add('animated-js');
      document.querySelector('.python').classList.add('animated-python');
      document.querySelector('.java').classList.add('animated-java');
    }
  });