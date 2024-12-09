let darkLink = "dark.css";
let lightLink = "style.css";
var links = document.getElementsByClassName('styles');

function darkMode() {
    if (window.name === "style.css" || window.name == null) {
        currentLink = darkLink;
    } else if (window.name === "dark.css") {
        currentLink = lightLink;
    }
    window.name = currentLink;
    Array.from(links).forEach(link => {
        link.href = currentLink;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    Array.from(links).forEach(link => {
        link.href = window.name;
    });
})