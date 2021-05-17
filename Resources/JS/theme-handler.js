var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("THEME");
var base = document.getElementById('base')
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("THEME", "DARK");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("THEME", "LIGHT");
    }
}

if (currentTheme == ('')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("THEME", "DARK");
        base.classList.remove("preload");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("THEME", "LIGHT");
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