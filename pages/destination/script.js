import { fetchData, setSelectedTab } from '../..';

const tablist = document.querySelector("[role='tablist']");
const tabs = tablist.querySelectorAll("[role='tab']");
const containerItem = document.querySelector('.container__item');
const pictureSource = containerItem.querySelector('picture source');
const img = containerItem.querySelector('img');

const destinationName = document.querySelector('.container__destination');
const destinationDescription = document.querySelector(
  '.container__description'
);
const destinationDistance = document.querySelector('.container__distance p');
const destinationTravelTime = document.querySelector(
  '.container__travel-time p'
);

let focusIndex = 0;
document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchData();

  if (data) {
    const { destination } = data;

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', () => {
        changeTab(destination, i);
      });
    }

    tablist.addEventListener('keydown', (e) => {
      changeTabIndex(e, destination);
    });
  } else {
    console.log('No data available');
  }
});

const changeTab = (data, index) => {
  setSelectedTab(tabs[index]);
  pictureSource.srcset = data[index].images.webp;
  img.src = data[index].images.png;
  destinationName.textContent = data[index].name;
  destinationDescription.textContent = data[index].description;
  destinationDistance.textContent = data[index].distance;
  destinationTravelTime.textContent = data[index].travel;
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
