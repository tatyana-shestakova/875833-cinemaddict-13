import {createCardTemplate} from './view/card';
import {createContainerTemplate} from './view/container-card';
import {createMenuTemplate} from './view/menu';
import {createPopupTemplate} from './view/popup';
import {createButtonTemplate} from './view/show-button';
import {createStatsFooterTamplate} from './view/stats';
import {createStatusTemplate} from './view/status';

const CARD_COUNT = 5;
const CARD_COUNT_TOP = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector(`.header`);

render(header, createStatusTemplate(), `beforeend`);

const main = document.querySelector(`.main`);

render(main, createMenuTemplate(), `beforeend`);
render(main, createContainerTemplate(), `beforeend`);

const container = document.querySelector(`.films-list`);
const containerFilm = document.querySelector(`.films-list .films-list__container`);
const containersTop = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < CARD_COUNT; i++) {
  render(containerFilm, createCardTemplate(), `beforeend`);
}

render(container, createButtonTemplate(), `beforeend`);

containersTop.forEach((value) => {
  for (let i = 0; i < CARD_COUNT_TOP; i++) {
    render(value, createCardTemplate(), `beforeend`);
  }
});

const footer = document.querySelector(`.footer`);

render(footer, createStatsFooterTamplate(), `beforeend`);

render(footer, createPopupTemplate(), `afterend`);
