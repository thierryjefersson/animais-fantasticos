export default function initAccordion() {
  const accordion = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  function activeList() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordion.length) {
    accordion[0].classList.add(activeClass);
    accordion[0].nextElementSibling.classList.add(activeClass);

    accordion.forEach((item) => {
      item.addEventListener("click", activeList);
    });
  }
}
