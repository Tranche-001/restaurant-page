import "./style.css"
import { firstSection, secondSection } from "./home";
import { recipePage } from "./recipes";
import { aboutSection } from "./about";
const content = document.querySelector(".content");


const buttonHome = document.querySelector(".home");
buttonHome.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(firstSection);
  content.appendChild(secondSection);
})

const buttonMenu = document.querySelector(".menu");
buttonMenu.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(recipePage);
})

const buttonAbout = document.querySelector(".about");
buttonAbout.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(aboutSection);
})