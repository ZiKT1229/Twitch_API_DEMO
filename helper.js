function render(streams, container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  streams.forEach((stream) => {
    const sectionFilm = document.createElement('section');
    sectionFilm.className = 'film';

    const preview = stream.preview.medium;
    const imgPreview = document.createElement('img');
    imgPreview.className = 'film-img';
    imgPreview.src = preview;
    sectionFilm.appendChild(imgPreview);

    const { channel } = stream;
    const { logo } = channel;
    const { name } = channel;
    const { url } = channel;

    const divData = document.createElement('div');
    divData.className = 'film-data';
    const imgLogo = document.createElement('img');
    imgLogo.className = 'data-img';
    imgLogo.src = logo;
    const aName = document.createElement('a');
    aName.className = 'data-info';
    aName.textContent = name;
    aName.href = url;

    divData.appendChild(imgLogo);
    divData.appendChild(aName);
    sectionFilm.appendChild(divData);

    container.appendChild(sectionFilm);
  });
}

export { render as default };
