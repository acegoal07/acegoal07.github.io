var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("THEME");
var base = document.getElementById('base')
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "DARK");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "LIGHT");
    }
}

if (currentTheme == ('')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "DARK");
        base.classList.remove("preload");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "LIGHT");
        base.classList.remove("preload");
    }
})} 
if (currentTheme == "DARK") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
    base.classList.remove("preload"); 
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
    base.classList.remove("preload");
}