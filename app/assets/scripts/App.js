import "../styles/styles.css";
import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/revealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);

let mobileMenu = new MobileMenu();
// if (module.hot) {
//   module.hot.accept();
// }
