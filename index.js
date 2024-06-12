const main = document.querySelector('main');
const toggleButton = document.getElementById('navToggle');
const navList = document.getElementById('navigation-list');
const navLinks = document.querySelectorAll('.list__item-link');

// fetch and cache data
async function fetchData() {
  const localStorageKey = 'dataCache';

  // Check if data is already in local storage
  const cachedData = localStorage.getItem(localStorageKey);
  if (cachedData) {
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

let currentPageId;
const setActivePage = (id) => {
  const link = document.getElementById(`${id}`);

  if (main.classList.contains(`container--${id}`)) {
    link.classList.add('active');
    currentPageId = id;
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

// tab control logic
const setSelectedTab = (element) => {
  const currentTab = document.querySelector("[aria-selected='true']");

  currentTab?.setAttribute('aria-selected', 'false');
  currentTab.setAttribute('tabindex', '-1');
  element.setAttribute('aria-selected', 'true');
  element.setAttribute('tabindex', '0');
};

const data = await fetchData();

if (data && currentPageId != 'home') {
  const description = document.querySelector('.container__description');
  const item = document.querySelector('.container__item');
  const pictureSource = item.querySelector('picture source');
  const img = item.querySelector('img');

  const tablist = document.querySelector("[role='tablist']");
  const tabs = tablist.querySelectorAll("[role='tab']");
  const tabPanel = document.querySelector("[role='tabpanel']");
  const tabName = document.querySelector('.container__text-name');

  const { destination, crew, technology } = data;

  // change tab content
  const changeTab = () => {
    setSelectedTab(tabs[focusIndex]);

    function getImageUrl(name) {
      return new URL(`${name}`, import.meta.url).href;
    }

    if (currentPageId === 'destination') {
      const destinationName = document.querySelector('.container__destination');
      const distance = document.querySelector('.container__distance p');
      const travelTime = document.querySelector('.container__travel-time p');

      pictureSource.srcset = getImageUrl(destination[focusIndex].images.webp);
      img.src = getImageUrl(destination[focusIndex].images.png);
      destinationName.textContent = destination[focusIndex].name;
      description.textContent = destination[focusIndex].description;
      distance.textContent = destination[focusIndex].distance;
      travelTime.textContent = destination[focusIndex].travel;
    }

    if (currentPageId === 'crew') {
      const crewTitle = document.querySelector('.container__text-title');

      pictureSource.srcset = getImageUrl(crew[focusIndex].images.webp);
      img.src = getImageUrl(crew[focusIndex].images.png);
      crewTitle.textContent = crew[focusIndex].role;
      tabName.textContent = crew[focusIndex].name;
      description.textContent = crew[focusIndex].bio;
    }

    if (currentPageId === 'technology') {
      pictureSource.srcset = getImageUrl(
        technology[focusIndex].images.portrait
      );
      img.src = getImageUrl(technology[focusIndex].images.landscape);
      tabName.textContent = technology[focusIndex].name;
      description.textContent = technology[focusIndex].description;
    }
  };

  let focusIndex = 0;
  const changeTabIndex = (e) => {
    if (e.key === 'ArrowRight') {
      focusIndex === tabs.length - 1 ? (focusIndex = 0) : focusIndex++;
      changeTab();
    }

    if (e.key === 'ArrowLeft') {
      focusIndex === 0 ? (focusIndex = tabs.length - 1) : focusIndex--;
      changeTab();
    }
  };

  tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
      focusIndex = tabIndex;
      changeTab();
    });
  });

  tablist.addEventListener('keydown', (e) => {
    changeTabIndex(e);
    tabs[focusIndex].focus();
  });

  tabPanel.addEventListener('keydown', (e) => {
    changeTabIndex(e);
  });
}
