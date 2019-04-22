import App from './app.js';

const url = 'https://api.twitch.tv/kraken/streams/';
const clientId = 'a7wvr2seuhub9br5h63epquw6c031h';
const game = 'League%20of%20Legends';
const limit = 15;
const container = document.getElementsByClassName('films-container')[0];
const gameList = document.getElementsByClassName('game-list');
const app = new App(url, clientId, game, limit, container, gameList);

app.addEvent();
app.getTwitch();
