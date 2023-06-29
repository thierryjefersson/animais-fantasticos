import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    // define touchstart e click como argumento padrao de
    // events, caso não seja definido antes
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  // adiciona ou remove as classes quando o evento
  // é executado
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  // adiciona o event ao menu
  addMenuMobileEvents() {
    this.events.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
