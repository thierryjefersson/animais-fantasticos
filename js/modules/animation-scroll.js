export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Armazena a distancia de cada item em relacao ao
  // topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  // Verifica a distancia de cada objeto ao topo
  // em relecao o scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }

    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
