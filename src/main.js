import "./style.css";
import fastFood from "./images/fast-food.png";

export const mainElement = document.createElement("main");
// first section of the main element
const firstSection = document.createElement("section");
firstSection.classList.add("firstSection");
// tagline
const taglineContainer = document.createElement("div");
taglineContainer.classList.add("taglineContainer");
// tagline text
const taglineText = document.createElement("p");
taglineText.classList.add("taglineText");
taglineText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// tagline h1
const tagline = document.createElement("h1");
tagline.classList.add("tagline");
tagline.textContent = 'Welcome to Lutong Bahay ni Nanay!';
taglineContainer.append(tagline, taglineText);
// image that displays fast food image
const fastFoodImageContainer = document.createElement('figure');
const fastFoodImage =new Image();
fastFoodImage.classList.add("fastFoodImage");
fastFoodImage.src = fastFood;
fastFoodImageContainer.classList.add("fastFoodImageContainer");
fastFoodImageContainer.appendChild(fastFoodImage);

firstSection.append(taglineContainer, fastFoodImageContainer);
mainElement.appendChild(firstSection);