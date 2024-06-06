const container = document.querySelector('.container--destination');
const containerList = document.querySelector('.container__list');

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

fetch('/space-tourism/data.json')
  .then((response) => response.json())
  .then((data) => {
    const { destination } = data;
    console.log(destination);

    destination.forEach((destination) => {
      createDestinationList(destination.name);
    });
  })
  .catch((error) => console.log('Error:', error));
