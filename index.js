import App from './app.js';

const initData = {
  url: 'https://api.twitch.tv/kraken/streams/',
  clientId: 'a7wvr2seuhub9br5h63epquw6c031h',
  game: 'League%20of%20Legends',
  limit: 15,
  container: document.getElementsByClassName('films-container')[0],
  gameList: document.getElementsByClassName('game-list')
};
const app = new App(initData);

app.addEvent();
app.getTwitch();
