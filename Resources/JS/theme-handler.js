var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem('setTheme');
var base = document.getElementById('base')
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}

if (localStorage.getItem("setTheme") === null) {
    console.log("Hello World!")
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
        console.log("detected system prefers dark mode")
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
        base.classList.remove("preload");
    } else {
        console.log("detected system prefers light mode")
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");t
        base.classList.remove("preload");
    }
}

if (currentTheme == "dark") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
    base.classList.remove("preload"); 
} if (currentTheme == "green") {
    theme.setAttribute('href', '/Resources/CSS/theme/green.css');
    base.classList.remove("preload");
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
    base.classList.remove("preload");
}