import { homeFunction } from './home.js';
import { menuFunction } from './menu.js';
import { aboutFunction } from './about.js';
import logo from './images/restaurant-logo.png';

document.querySelector('.restaurantLogo').src = logo;

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(homeFunction());

let functionArray = [
    {
        buttonName: '#homeBtn',
        functionName: homeFunction,
    },
    {
        buttonName: '#menuBtn',
        functionName: menuFunction,
    },
    {
        buttonName: '#aboutBtn',
        functionName: aboutFunction,
    }
]; 

for (const functions of functionArray) {
    const btn = document.querySelector(functions.buttonName);
    btn.addEventListener('click', () => {
        contentDiv.innerHTML = ''; // Clear the content
        contentDiv.appendChild(functions.functionName()); // Append the respective function's content
    });
}
