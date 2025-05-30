import "./style.css";


export const homeCaption = () => {
    const activeHomeBtn = document.querySelector('#homeBtn');
    activeHomeBtn.style.cssText = `background-color: white;
    color: var(--orange);`
    // figure caption
    const websiteCaption = document.createElement("figcaption");
    websiteCaption.classList.add("website-caption");
    const websiteTagline = document.createElement('h1');
    websiteTagline.textContent = "Taste the Traditional Philippine Foods!";

    const websiteText = document.createElement('p');
    websiteText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt";
    websiteCaption.append(websiteTagline, websiteText);
    return websiteCaption;
}