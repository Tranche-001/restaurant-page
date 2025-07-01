import "./style.css"
import { firstSection, secondSection } from "./home";
import { recipePage } from "./recipes";
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