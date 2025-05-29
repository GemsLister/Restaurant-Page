import "./style.css";
import fastFood from "./images/fast-food.jpeg";

export const mainElement = document.createElement("main");

// first-section create-element
const firstSection = document.createElement("section");
firstSection.classList.add("firstSection");
// fast food image create-element
const fastFoodImage = document.createElement("img");
fastFoodImage.src = fastFood;
fastFoodImage.classList.add("fastFoodImage");
// tagline create-element
const tagline = document.createElement("h1");
tagline.textContent = `Mother's tastes the best!`;

firstSection.appendChild(tagline);
mainElement.appendChild(firstSection);
