import Accordion from './modules/accordion.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollAnima from './modules/scroll-anima.js';
import TabNav from './modules/tabnav.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const nav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
nav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
