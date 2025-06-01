import { homeCaption } from './home.js';
import { menuFunction } from './menu.js';


const contentDiv = document.querySelector('#content');
contentDiv.appendChild(homeCaption());

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => {
    contentDiv.innerHTML = ''; // Clear the content
    contentDiv.appendChild(menuFunction()); // Append the menu content
});