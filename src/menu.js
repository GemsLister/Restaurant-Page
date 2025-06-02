import "./menu-style.css";
import adoboImg from "./images/adobo.png";
import lumpiaImg from "./images/lumpia.png";
import pancitCantonImg from "./images/pancit-canton.png";
import sisigImg from "./images/sisig.png";
import crispyPataImg from "./images/crispy-pata.png";
import kinilawImg from "./images/kinilaw.png";
import { homeFunction } from "./home.js";


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

  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("menu-body");

  // menu section
  const menuArray = [
    {
      image: adoboImg,
      name: "Adobo",
      description: "A savory dish made with meat marinated in vinegar, soy sauce, and spices.",
      price: "P150",
    },
    {
      image: lumpiaImg,
      name: "Lumpia",
      description: "A spring roll filled with vegetables and meat, often served with a dipping sauce.",
      price: "P80",
    },
    {
      image: pancitCantonImg,
      name: "Pancit Canton",
      description: "A stir-fried noodle dish with vegetables, meat, and seafood.",
      price: "P180",
    },
    {
      image: sisigImg,
      name: "Sisig",
      description: "A chopped pork, onions, and spices, served on a hot plate.",
      price: "P130",
    },
    {
      image: crispyPataImg,
      name: "Crispy Pata",
      description: "Deep-fried pork leg with a crispy skin, served with a vinegar dipping sauce.",
      price: "P450",
    },
    {
      image: kinilawImg,
      name: "Kinilaw",
      description: "A Filipino ceviche made with raw fish marinated in vinegar and citrus juices.",
      price: "P200",
    }
  ]

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const menuFoods = document.createElement("div");
  menuFoods.classList.add("menu-foods");

  for (const food of menuArray) {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    const foodImage = document.createElement("img");
    foodImage.src = food.image;
    foodImage.alt = `${food.name} image`;

    const foodName = document.createElement("h3");
    foodName.textContent = food.name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = food.description;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = food.price;

    const foodDetails = document.createElement("div");
    foodDetails.classList.add("food-details");
    foodDetails.append(foodName, foodDescription, foodPrice);

    foodItem.append(foodImage, foodDetails);
    menuFoods.append(foodItem);
  }

  menuSection.appendChild(menuFoods);
  return menuSection;
};

const homePage = document.querySelector("#homeBtn");
homePage.addEventListener("click", () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeFunction());
});
