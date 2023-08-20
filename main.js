const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const skillsToggle = document.querySelector('.skills');

var typed = new Typed('.auto-type', {
  strings: ['Full Stack Engineer', 'Gym Rat', 'Badmintonist'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

navToggle.addEventListener('click', () => {
  if (primaryNav.hasAttribute('data-visible')) {
    navToggle.setAttribute('aria-expanded', false);
  } else {
    navToggle.setAttribute('aria-expanded', true);
  }

  primaryNav.toggleAttribute('data-visible');

  if (primaryNav.hasAttribute('data-visible')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }

  primaryHeader.toggleAttribute('data-overlay');
});

window.addEventListener('resize', () => {
  primaryNav.removeAttribute('data-visible');
  primaryHeader.removeAttribute('data-overlay');
  document.body.style.overflow = 'scroll';
  document.body.style.overflowX = 'hidden';
});
