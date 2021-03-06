import Accordion from './modules/accordion.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import TabNav from './modules/tabnav.js';
import fetchTitulos from './modules/fetchTitulos.js';
import SlideNav from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"], a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

fetchTitulos('./titulosMasculinoApi.json', '.numeros-mas');
fetchTitulos('./titulosFemininoApi.json', '.numeros-fem');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
