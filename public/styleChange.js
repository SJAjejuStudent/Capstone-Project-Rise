let darkLink = "dark.css";
let lightLink = "style.css";
var links = document.getElementsByClassName('styles');

function darkMode() {
    if (window.name === "style.css" || window.name == ``) {
        currentLink = darkLink;
    } else if (window.name === "dark.css") {
        currentLink = lightLink;
    }
    window.name = currentLink;
    Array.from(links).forEach(link => {
        link.href = window.name;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.name == ``) {
        Array.from(links).forEach(link => {
            link.href = "style.css";
        });
    } else {
    Array.from(links).forEach(link => {
        link.href = window.name;
    });
}
})