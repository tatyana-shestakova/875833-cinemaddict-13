import {renderCardTemplate} from './view/card';
import {renderContainerTemplate} from './view/container-card';
import {renderMenuTemplate} from './view/menu';
import {renderPopupTemplate} from './view/popup';
import {renderButtonTemplate} from './view/show-button';
import {createStatsFooterTamplate} from './view/stats';
import {renderStatusTemplate} from './view/status';

const CARD_COUNT = 5;
const CARD_COUNT_TOP = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector(`.header`);

render(header, renderStatusTemplate(), `beforeend`);

const main = document.querySelector(`.main`);

render(main, renderMenuTemplate(), `beforeend`);
render(main, renderContainerTemplate(), `beforeend`);

const container = document.querySelector(`.films-list`);
const containerFilm = document.querySelector(`.films-list .films-list__container`);
const containersTop = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < CARD_COUNT; i++) {
  render(containerFilm, renderCardTemplate(), `beforeend`);
}

render(container, renderButtonTemplate(), `beforeend`);

containersTop.forEach((value) => {
  for (let i = 0; i < CARD_COUNT_TOP; i++) {
    render(value, renderCardTemplate(), `beforeend`);
  }
});

const footer = document.querySelector(`.footer`);

render(footer, createStatsFooterTamplate(), `beforeend`);

render(footer, renderPopupTemplate(), `afterend`);
