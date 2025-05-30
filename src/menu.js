import "./home-style.css";
import "./menu-style.css";
import './images/adobo.png'
import { homeCaption } from "./home.js";

export const menuFunction = () => {
  // deactivate home button and about button
  const deactivateBtn = [];
  const deactivateHomeBtn = document.querySelector("#homeBtn");
  deactivateHomeBtn.classList.add("deactivateHomeBtn");
  const deactivateAboutBtn = document.querySelector("#aboutBtn");
  deactivateAboutBtn.classList.add("deactivateAboutBtn");
  deactivateBtn.push(deactivateHomeBtn, deactivateAboutBtn);

  deactivateBtn.forEach((btn) => {
    btn.style.cssText = "";
  });

  const activeMenuBtn = document.querySelector("#menuBtn");
  activeMenuBtn.classList.add("active");
  activeMenuBtn.style.cssText = `background-color: white;
    color: var(--orange);`;

  // menu section
  const foodMenu = [];
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  const menuFoods = document.createElement("div");

  for (let i = 0; i < 4; i++) {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    const foodName = document.createElement("h3");
    if (i === 0){
        const adoboImg = document.createElement("img");
        adoboImg.src = "./images/adobo.png";
        const adoboObject = {
            image: adoboImg,
            name: 'Adobo',
            description: 'A popular Filipino dish made with meat marinated in vinegar, soy sauce, and spices, then slow-cooked to perfection.',
            price: '₱150',
        }
        foodMenu.push(adoboObject);
    }
  }

  menuSection.appendChild(menuTitle);
  return menuSection;
};

const homePage = document.querySelector("#homeBtn");
homePage.addEventListener("click", () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeCaption());
});
