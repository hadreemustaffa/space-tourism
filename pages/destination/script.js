const container = document.querySelector('.container--destination');
const containerList = document.querySelector('.container__list');
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

fetch('/space-tourism/data.json')
  .then((response) => response.json())
  .then((data) => {
    const { destination } = data;

    destination.forEach((destination) => {
      createDestinationList(destination.name);
    });

    const listItems = document.querySelectorAll('.container__list-item');

    listItems[0].firstElementChild.classList.add('active');

    for (let i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener('click', () => {
        setActiveClass(listItems[i]);
        pictureSource.srcset = destination[i].images.webp;
        img.src = destination[i].images.png;
        destinationName.textContent = destination[i].name;
        destinationDescription.textContent = destination[i].description;
        destinationDistance.textContent = destination[i].distance;
        destinationTravelTime.textContent = destination[i].travel;
      });
    }
  })
  .catch((error) => console.log('Error:', error));

const createDestinationList = (name) => {
  const li = document.createElement('li');
  li.classList.add('container__list-item');

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn', 'btn-nav', 'underline-effect');
  button.textContent = name;

  li.appendChild(button);

  containerList.appendChild(li);
};

const setActiveClass = (element) => {
  const activeButton = containerList.querySelector('.active');
  const button = element.querySelector('.btn-nav');

  activeButton?.classList.remove('active');
  button.classList.add('active');
};
