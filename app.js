import render from './helper.js';

/**
 * @param {String} url API's url
 * @param {String} clientId APIKEY
 */
const url = 'https://api.twitch.tv/kraken/streams/';
const clientId = 'a7wvr2seuhub9br5h63epquw6c031h';

/**
 * @param {String} game game's name
 * @param {String} limit numbers of object
 */
let game = 'League%20of%20Legends';
const limit = 15;

/**
 * @param {NodeList} gameList to get the radio's value
 * @param {Node} container to get the dom
 */
const gameList = document.getElementsByClassName('game-list');
const container = document.getElementsByClassName('films-container')[0];

// fetch API with async function
const getTwitch = async () => {
  const endpoint = `${url}?client_id=${clientId}&game=${game}&limit=${limit}`;

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      render(jsonResponse.streams, container);
    } else {
      throw new Error('Oh my god!');
    }
  } catch (error) {
    console.log(error);
  }
};

// 因為是 HTMLCollection 所以使用 forEach 時要注意
Array.from(gameList).forEach((element) => {
  element.addEventListener('click', () => {
    const currActive = document.getElementsByClassName('list-active')[0];
    currActive.classList.remove('list-active');
    element.classList.toggle('list-active');
    game = element.title;
    getTwitch();
  });
});

getTwitch();

/* const getTopGame = async () => {
  const endpoint = 'https://api.twitch.tv/kraken/games/top/?client_id=a7wvr2seuhub9br5h63epquw6c031h&limit=3';

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      throw new Error('Oh my god!');
    }
  } catch (error) {
    console.log(error);
  }
}; */
