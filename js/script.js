import Accordion from './modules/accordion.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"], a[href^="#"]');
scrollSuave.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
