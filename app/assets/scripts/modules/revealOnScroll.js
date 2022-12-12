import { throttle } from "lodash";
import { debounce } from "lodash";
class RevealOnScroll {
  constructor(els, revealPoint) {
    this.revealPoint = revealPoint;
    this.itemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.hideItially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("broser resized");
        this.browserHeight = window.innerHeight;
      }, 300)
    );
  }

  calcCaller() {
    this.itemsToReveal.forEach((el) => {
      if (el.isRevealed === false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.revealPoint) {
        el.classList.add("reval-item--is-visible");
        el.isRevealed = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideItially() {
    this.itemsToReveal.forEach((el) => {
      el.classList.add("reval-item");
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}
export default RevealOnScroll;
