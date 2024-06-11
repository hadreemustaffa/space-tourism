const main = document.querySelector('main');
const toggleButton = document.getElementById('navToggle');
const navList = document.getElementById('navigation-list');
const navLinks = document.querySelectorAll('.list__item-link');

// fetch and cache data
export async function fetchData() {
  const localStorageKey = 'dataCache';

  // Check if data is already in local storage
  const cachedData = localStorage.getItem(localStorageKey);
  if (cachedData) {
    console.log('Using cached data');
    return JSON.parse(cachedData);
  }

  // If not, fetch the data from the server
  try {
    const response = await fetch('/space-tourism/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Store the fetched data in local storage
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    console.log('Fetched and cached new data');
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}

export const setSelectedTab = (element) => {
  const currentTab = document.querySelector("[aria-selected='true']");

  currentTab?.setAttribute('aria-selected', 'false');
  currentTab.setAttribute('tabindex', '-1');
  element.setAttribute('aria-selected', 'true');
  element.setAttribute('tabindex', '0');
};

const setActivePage = (id) => {
  const link = document.getElementById(`${id}`);

  if (main.classList.contains(`container--${id}`)) {
    link.classList.add('active');
  }
};

navLinks.forEach((link) => {
  setActivePage(link.id);
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
