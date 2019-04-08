import render from './helper.js';

const url = 'https://api.twitch.tv/kraken/streams/';
const clientId = 'a7wvr2seuhub9br5h63epquw6c031h';
let game = '';
let limit = '';

const radioGame = document.getElementsByClassName('game');
const radioNumber = document.getElementsByClassName('number');

const container = document.getElementsByClassName('films-container')[0];

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

document.getElementsByClassName('filter')[0].addEventListener('click', () => {
  for (let i = 0; i < radioGame.length; i += 1) {
    if (radioGame[i].checked) {
      game = radioGame[i].value;
      break;
    }
  }

  for (let i = 0; i < radioNumber.length; i += 1) {
    if (radioNumber[i].checked) {
      limit = radioNumber[i].value;
      break;
    }
  }

  getTwitch();
});
