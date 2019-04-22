import render from './helper.js';

class App {
  constructor(url, clientId, game, limit, container, gameList) {
    this.url = url;
    this.clientId = clientId;
    this.game = game;
    this.limit = limit;
    this.container = container;
    this.gameList = gameList;
  }

  async getTwitch() {
    const endpoint = `${this.url}?client_id=${this.clientId}&game=${this.game}&limit=${this.limit}`;

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        render(jsonResponse.streams, this.container);
      } else {
        throw new Error('Oh my god!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  addEvent() {
    Array.from(this.gameList).forEach((element) => {
      element.addEventListener('click', () => {
        const currActive = document.getElementsByClassName('list-active')[0];
        currActive.classList.remove('list-active');
        element.classList.toggle('list-active');
        this.game = element.title;
        this.getTwitch();
      });
    });
  }
}

export { App as default };
