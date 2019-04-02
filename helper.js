export function render(streams, container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  streams.forEach(stream => {
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
    let link = channel.url;

    let divData = document.createElement("div");
    divData.className = "film-data";
    let imgLogo = document.createElement("img");
    imgLogo.className = "data-img";
    imgLogo.src = logo;
    let aName = document.createElement("a");
    aName.className = "data-info";
    aName.textContent = name;
    aName.href = link;

    divData.appendChild(imgLogo);
    divData.appendChild(aName);
    sectionFilm.appendChild(divData);

    container.appendChild(sectionFilm);
  });
}