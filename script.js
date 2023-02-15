const API_URL = 'https://rickandmortyapi.com/api/character/1,22,13,14';

const main = document.getElementById('main');

// get initial characters
getDisplay(API_URL);

async function getDisplay(url) {
  const res = await fetch(url);
  const data = await res.json();
  showDisplay(data);
}

function showDisplay(characters) {
  main.innerHTML = '';

  characters.forEach((character) => {
    const { name, image, species, status } = character;

    const characterEl = document.createElement('div');
    characterEl.classList.add('character');
    characterEl.innerHTML = `
      <img src="${image}" alt="${name}">
      <div class="character-info">
        <h3>${name}</h3>
        <p>Species: ${species}</p>
        <p>Status: ${status}</p>
      </div>
    `;

    const imageEl = characterEl.querySelector('img');
    imageEl.addEventListener('click', () => {
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.style.backgroundImage = `url(${image})`;

      document.body.appendChild(popup);

      popup.addEventListener('click', () => {
        popup.remove();
      });
    });

    main.appendChild(characterEl);
  });
}
