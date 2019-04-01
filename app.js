//import {render} from './helper';

const url = 'https://api.twitch.tv/kraken/streams/';
const clientId = 'a7wvr2seuhub9br5h63epquw6c031h';
let game = '';
let limit = '';

const radioGame = document.getElementsByClassName("game");
const radioNumber = document.getElementsByClassName("number");

const container = document.getElementsByClassName("films-container")[0];

function render(streams) {
  streams.forEach(stream => {
    console.log(stream);
    let sectionFilm = document.createElement("section");
    sectionFilm.className = "film";

    let preview = stream.preview.medium;
    let imgPreview = document.createElement("img");
    imgPreview.className = "film-img";
    imgPreview.src = preview;
    sectionFilm.appendChild(imgPreview);

    let channel = stream.channel;
    let logo = channel.logo;
    let name = channel.name;
    //let link = channel.url;

    let divData = document.createElement("div");
    divData.className = "film-data";
    let imgLogo = document.createElement("img");
    imgLogo.className = "data-img";
    imgLogo.src = logo;
    let divName = document.createElement("div");
    divName.className = "data-info";
    divName.textContent = name;

    divData.appendChild(imgLogo);
    divData.appendChild(divName);
    sectionFilm.appendChild(divData);

    container.appendChild(sectionFilm);
  });
}

const getTwitch = async () => {
  const endpoint = `${url}?client_id=${clientId}&game=${game}&limit=${limit}`;

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      render(jsonResponse.streams);
    } else {
      throw new Error('Oh my god!');
    }
  } catch (error) {
    console.log(error);
  }
};

document.getElementsByClassName("filter")[0].addEventListener("click", () => {
  for (let i = 0; i < radioGame.length; i++) {
    if (radioGame[i].checked) {
      game = radioGame[i].value;
      break; 
    }
  }

  for (let i = 0; i < radioNumber.length; i++) {
    if (radioNumber[i].checked) {
      limit = radioNumber[i].value;
      break;
    }
  }

  getTwitch();
});