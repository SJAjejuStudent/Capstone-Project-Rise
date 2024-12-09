let darkLink = "dark.css";
let lightLink = "style.css";
let currentLink = "style.css";
var links = document.getElementsByClassName('styles');

function darkMode() {
    if (currentLink === "style.css") {
        currentLink = darkLink;
    } else {
        currentLink = lightLink;
    }
    Array.from(links).forEach(link => {
        link.href = currentLink;
    });
}
