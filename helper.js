const $create = (tag = 'div', attrs = {}, text = '') => {
  const node = document.createElement(tag);
  Object.keys(attrs).forEach((name) => {
    node.setAttribute(name, attrs[name]);
  });
  node.textContent = text;
  return node;
};

function render(streams, container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  streams.forEach((stream) => {
    const preview = stream.preview.medium;
    const { channel } = stream;
    const { logo, name, url } = channel;
    const sectionFilm = $create('section', { class: 'film' });
    const imgPreview = $create('img', { class: 'film-img', src: preview });
    const divData = $create('div', { class: 'film-data' });
    const imgLogo = $create('img', { class: 'data-img', src: logo });
    const aName = $create('a', { class: 'data-info', href: url }, name);

    sectionFilm.appendChild(imgPreview);
    divData.appendChild(imgLogo);
    divData.appendChild(aName);
    sectionFilm.appendChild(divData);
    container.appendChild(sectionFilm);
  });
}

export { render as default };
