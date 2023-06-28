import ScrollSmooth from "./modules/scroll-smooth.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import valorBitcoin from "./modules/fetch-bitcoin.js";
import AnimationScroll from "./modules/animation-scroll.js";

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const animationScroll = new AnimationScroll("[data-anime='scroll']");
animationScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown");
dropdownMenu.init();

initMenuMobile();
initFuncionamento();
fetchAnimais("./json/animaisapi.json", ".numeros-grid");
valorBitcoin("https://blockchain.info/ticker", ".btc-preco");
