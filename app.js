function showCost1(button) {
    const paragraph = button.parentNode;
    const service__cost = document.createTextNode("10 000 ₽");
    paragraph.removeChild(button);
    paragraph.appendChild(service__cost);
  }
  function showCost2(button) {
    const paragraph = button.parentNode;
    const service__cost = document.createTextNode("от 10 000 ₽");
    paragraph.removeChild(button);
    paragraph.appendChild(service__cost);
  }
  function showCost3(button) {
    const paragraph = button.parentNode;
    const service__cost = document.createTextNode("25 000 ₽");
    paragraph.removeChild(button);
    paragraph.appendChild(service__cost);
  }
  function showCost4(button) {
    const paragraph = button.parentNode;
    const offer__cost = document.createTextNode("50 000 ₽");
    paragraph.removeChild(button);
    paragraph.appendChild(offer__cost);
  }
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header__menu").classList.toggle("active");
      document.querySelector("body").classList.toggle("lock");
    });
  document.querySelectorAll(".header__menu a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector(".header__burger").classList.remove("active");
      document.querySelector(".header__menu").classList.remove("active");
      document.querySelector("body").classList.remove("lock");
    });
  });