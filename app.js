import render from './helper.js';

class App {
  constructor(initData) {
    Object.assign(this, initData);
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
