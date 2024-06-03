const toggleButton = document.getElementById('navToggle');
const navList = document.getElementById('navigation-list');

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
