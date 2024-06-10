import { fetchData } from '../..';

const slider = document.querySelector('.container__slider');
const sliderButtons = document.querySelectorAll('.container__slider-dots.btn');
const containerItem = document.querySelector('.container__item');
const pictureSource = containerItem.querySelector('picture source');
const img = containerItem.querySelector('img');

const crewTitle = document.querySelector('.container__text-title');
const crewName = document.querySelector('.container__text-name');
const containerDescription = document.querySelector('.container__description');

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchData();
  if (data) {
    const { crew } = data;

    for (let i = 0; i < sliderButtons.length; i++) {
      sliderButtons[i].addEventListener('click', () => {
        setActiveClass(sliderButtons[i]);
        pictureSource.srcset = crew[i].images.webp;
        img.src = crew[i].images.png;
        crewTitle.textContent = crew[i].role;
        crewName.textContent = crew[i].name;
        containerDescription.textContent = crew[i].bio;
      });
    }
  } else {
    console.log('No data available');
  }
});

const setActiveClass = (element) => {
  const activeButton = slider.querySelector("button[aria-selected='true']");

  activeButton?.setAttribute('aria-selected', 'false');
  element.setAttribute('aria-selected', 'true');
};
