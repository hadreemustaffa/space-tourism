const main = document.querySelector('main');
const toggleButton = document.getElementById('navToggle');
const navList = document.getElementById('navigation-list');
const navLinks = document.querySelectorAll('.list__item-link');

const setActiveClass = (id) => {
  const link = document.getElementById(`${id}`);
  if (main.classList.contains(`container--${id}`)) {
    link.classList.add('active');
  }
};

navLinks.forEach((link) => {
  setActiveClass(link.id);
});

toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

  if (!isExpanded) {
    toggleButton.setAttribute('aria-expanded', 'true');
    navList.setAttribute('opened', '');
  } else {
    toggleButton.setAttribute('aria-expanded', 'false');
    navList.removeAttribute('opened');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('active');
  });
});
