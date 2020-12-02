
import {createContainer} from './view/create-container';
import {getTemplateHeader, header} from './view/status';
import {getTemplateMain, getTemplateSort, main, sortClass} from './view/menu';
import {getTemplateContainerCards, hidden} from './view/cards';
import {footerStatistics, statistics} from './view/statictics';
// import {getTemplatePopup} from './view/pop-up';

// Отрисовка статуса

const profile = {
  rating: `Sci-Fighter`,
  avatar: `images/bitmap@2x.png`
};

const typeOfProfile = {
  tag: `section`,
  descriptionMain: `header__profile`,
  descriptionAd: `profile`
};

createContainer(getTemplateHeader(profile), typeOfProfile, header);

// Отрисовка меню

const navStats = {
  watchlist: 13,
  history: 4,
  favorites: 8
};

const typeOfNav = {
  tag: `nav`,
  descriptionMain: `main-navigation`,
  descriptionAd: ``
};

createContainer(getTemplateMain(navStats), typeOfNav, main);

// Отрисовка сортировки

const typeofSort = {
  tag: `ul`,
  descriptionMain: `sort`,
  descriptionAd: ``
};

createContainer(getTemplateSort(sortClass), typeofSort, main);

// Отрисовка карточек

const films = [{
  title: `The Dance of Life`,
  rating: `8.3`,
  year: `1929`,
  duration: `1h 55m`,
  genre: `Musical`,
  poster: `./images/posters/the-dance-of-life.jpg`,
  description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
  comments: `5`,
  watchlist: ``,
  watched: ``,
  favorite: ``
},
{
  title: `Sagebrush Trail`,
  rating: `3.2`,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  poster: `./images/posters/sagebrush-trail.jpg`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  comments: `89`,
  watchlist: `film-card__controls-item--active`,
  watched: ``,
  favorite: ``
},
{
  title: `The Man with the Golden Arm`,
  rating: `9.0`,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  comments: `18`,
  watchlist: ``,
  watched: `film-card__controls-item--active`,
  favorite: ``
},
{
  title: `Santa Claus Conquers the Martians`,
  rating: `2.3`,
  year: 1964,
  duration: `1h 21m`,
  genre: `Comedy`,
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  comments: `465`,
  watchlist: ``,
  watched: ``,
  favorite: `film-card__controls-item--active`
},
{
  title: `Popeye the Sailor Meets Sindbad the Sailor`,
  rating: `6.3`,
  year: `1936`,
  duration: `16m`,
  genre: `Cartoon`,
  poster: `./images/posters/popeye-meets-sinbad.png`,
  description: `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`,
  comments: `0`,
  watchlist: `film-card__controls-item--active`,
  watched: `film-card__controls-item--active`,
  favorite: `film-card__controls-item--active`
}];

const typeOfCards = {
  tag: `section`,
  descriptionMain: `films`,
  descriptionAd: ``
};

createContainer(getTemplateContainerCards(hidden, films), typeOfCards, main);

// Отрисовка количества фильмов

const typeOfStatictics = {
  tag: `p`,
  descriptionMain: ``,
  descriptionAd: ``
};

createContainer(statistics, typeOfStatictics, footerStatistics);

// отрисовка pop-up
/*
const aboutFilm = {
  image: `./images/posters/the-great-flamarion.jpg`,
  pg: `+18`,
  title: `The Great Flamarion`,
  rating: `8.9`,
  director: `Anthony Mann`,
  writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  genres: [`Drama`, `Film-Noir`, `Mystery`],
  release: `30 March 1945`,
  runtime: `1h 18m`,
  country: `USA`,
  description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`
};

const typeOfPopup = {
  tag: `section`,
  descriptionMain: `film-details`,
  descriptionAd: ``
};
*/

// отключена
// createContainer(getTemplatePopup(aboutFilm), typeOfPopup, main);
