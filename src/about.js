import './about.css';
import chef1 from './images/chef1.png';
import chef2 from './images/chef2.png';
import chef3 from './images/chef3.png';
import chef4 from './images/chef4.png';
import chef5 from './images/chef5.png';
import chef6 from './images/chef6.png';

export const aboutFunction = () => {
    const contentDiv = document.querySelector('#content');
    const chefArray = [
        {
            name: 'Eric Aguinaldo',
            image: chef5,
            description: 'A culinary expert with over 15 years of experience in traditional and modern Filipino cuisine.'
        },
        {
            name: 'Angelo Bautista',
            image: chef4,
            description: 'A culinary expert with over 6 years of experience in traditional Filipino cuisine.'
        },
        {
            name: 'Anya Garcia',
            image: chef2,
            description: 'A culinary expert with over 3 years of experience in modern Filipino cuisine.'
        },
        {
            name: 'Lancelot Santos',
            image: chef3,
            description: 'A culinary expert with over 3 years of experience in modern Filipino cuisine.'
        },
        {
            name: 'Jonathan Dela Cruz',
            image: chef1,
            description: 'A culinary expert with over 2 years of experience in traditional Filipino cuisine.'
        },
    ]

    // deactivate home button and menu button
    const deactivateBtn = [];
    const deactivateHomeBtn = document.querySelector("#homeBtn");
    deactivateHomeBtn.classList.add("deactivateHomeBtn");
    const deactivateMenuBtn = document.querySelector("#menuBtn");
    deactivateMenuBtn.classList.add("deactivateMenuBtn");
    deactivateBtn.push(deactivateHomeBtn, deactivateMenuBtn);
    
    deactivateBtn.forEach((btn) => {
        btn.style.cssText = "";
    });
    
    const activeAboutBtn = document.querySelector("#aboutBtn");
    activeAboutBtn.style.cssText = `
        background-color: white;
        color: var(--orange);
    `;

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');
    // aboutSection.style.cssText = `
    //     background-color: #fffff1;
    //     width: 100%;
    //     z-index: 1000
    // `;
    
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    const aboutHeader = document.createElement('h1');
    aboutHeader.classList.add('about-header');
    aboutHeader.textContent = 'Meet our Chefs';
    
    const aboutBody = document.createElement('div');
    aboutBody.classList.add('about-body');

    const alingNenaContainer = document.createElement('div');
    alingNenaContainer.classList.add('aling-nena-container');
    const alingNenaCard = document.createElement('article');
    alingNenaCard.classList.add('aling-nena-card');
    alingNenaCard.innerHTML = `
        <img src="${chef6}" alt="Aling Nena" class="aling-nena-image">
        <h2 class="aling-nena-name">Nora Aquino</h2>
        <p class="aling-nena-description">Also known as "Aling Nena", she is the heart and soul of the restaurant, Nora Aquino serves delicious Filipino dishes for over 20 years. Her passion for cooking and dedication to quality ingredients make every meal a memorable experience.</p>
    `;
    alingNenaContainer.appendChild(alingNenaCard);

    aboutBody.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    `;

    for (const chef of chefArray) {
        const chefCard = document.createElement('article');
        chefCard.classList.add('chef-card');
        chefCard.innerHTML = `
            <img src="${chef.image}" alt="${chef.name}" class="chef-image">
            <h2 class="chef-name">${chef.name}</h2>
            <p class="chef-description">${chef.description}</p>
        `;
        aboutBody.appendChild(chefCard)
    }
    aboutContent.append(aboutHeader, alingNenaContainer, aboutBody);
    aboutSection.appendChild(aboutContent);

    const aboutFooter = document.createElement('footer');
    aboutFooter.classList.add('about-footer');
    aboutFooter.innerHTML = `
        <p>&copy; 2023 Aling Nena's Restaurant. All rights reserved.</p>
        <p>Follow us on social media for the latest updates!</p>
    `;

    const aboutContainer = document.createElement('div');
    aboutContainer.append(aboutSection, aboutFooter);
    aboutContainer.style.cssText = `
        width: 100%;
        height: 100%;
        background-color: #fffff1;
        z-index: 1000;
    `;

    return contentDiv.appendChild(aboutContainer);
}