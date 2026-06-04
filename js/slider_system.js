
export const slider = document.getElementById("slider");
const cards = document.querySelectorAll("#slider .card");
const _wrapper_slider = document.getElementById("wrapper-slider");
let idSlider;

_wrapper_slider.addEventListener("scroll", () => {;
  clearTimeout(idSlider);
console.log("koko")
  idSlider = setTimeout(() => {
    const centerSlider =
      _wrapper_slider.scrollLeft + _wrapper_slider.clientWidth / 2;

    let nearestCard = null;
    let nearestDistance = Infinity;

    cards.forEach(card => {
      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;

      const distance = Math.abs(
        centerSlider - cardCenter
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestCard = card;
      }
    });

    if (nearestCard) {
      const target =
        nearestCard.offsetLeft +
        nearestCard.offsetWidth / 2 -
        _wrapper_slider.clientWidth / 2;

      _wrapper_slider.scrollTo({
        left: target,
        behavior: "smooth"
      });
    }
  }, 100);
});