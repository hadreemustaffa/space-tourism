import { fetchData, setSelectedTab } from '../..';

const tablist = document.querySelector("[role='tablist']");
const tabs = tablist.querySelectorAll("[role='tab']");
const tabPanel = document.querySelector("[role='tabpanel']");
const containerItem = document.querySelector('.container__item');
const pictureSource = containerItem.querySelector('picture source');
const img = containerItem.querySelector('img');

const crewTitle = document.querySelector('.container__text-title');
const crewName = document.querySelector('.container__text-name');
const containerDescription = document.querySelector('.container__description');

let focusIndex = 0;
document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchData();
  if (data) {
    const { crew } = data;

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', () => {
        changeTab(crew, i);
      });
    }

    tablist.addEventListener('keydown', (e) => {
      changeTabIndex(e, crew);
    });

    tabPanel.addEventListener('keydown', (e) => {
      changeTabIndex(e, crew);
    });
  } else {
    console.log('No data available');
  }
});

const changeTab = (data, index) => {
  setSelectedTab(tabs[index]);
  pictureSource.srcset = data[index].images.webp;
  img.src = data[index].images.png;
  crewTitle.textContent = data[index].role;
  crewName.textContent = data[index].name;
  containerDescription.textContent = data[index].bio;
};

const changeTabIndex = (e, data) => {
  if (e.key === 'ArrowRight') {
    focusIndex === tabs.length - 1 ? (focusIndex = 0) : focusIndex++;
    tabs[focusIndex].focus();
    changeTab(data, focusIndex);
  }

  if (e.key === 'ArrowLeft') {
    focusIndex === 0 ? (focusIndex = tabs.length - 1) : focusIndex--;
    tabs[focusIndex].focus();
    changeTab(data, focusIndex);
  }
};
