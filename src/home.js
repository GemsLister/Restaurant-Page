import "./home-style.css";


export const homeFunction = () => {
    // deactivate menu button and about button
    const deactivateBtn = [];
    const deactivateMenuBtn = document.querySelector('#menuBtn');
    const deactivateAboutBtn = document.querySelector('#aboutBtn');
    deactivateBtn.push(deactivateMenuBtn, deactivateAboutBtn);
    for (const btn of deactivateBtn) {
        btn.style.cssText = '';
    }

    const activeHomeBtn = document.querySelector('#homeBtn');
    activeHomeBtn.classList.add('active');
    activeHomeBtn.style.cssText = `
    background-color: white;
    color: var(--orange);`;
    const websiteCaption = document.createElement("figcaption");
    websiteCaption.classList.add("website-caption");
    const websiteTagline = document.createElement('h1');
    websiteTagline.textContent = "Taste the Traditional Philippine Foods!";

    const websiteText = document.createElement('p');
    websiteText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt";
    websiteCaption.append(websiteTagline, websiteText);
    return websiteCaption;
}