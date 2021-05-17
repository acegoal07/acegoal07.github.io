var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("setTheme");
var base = document.getElementById('base')
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        base.classList.add('transition');
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
        base.classList.remove('transition');
    } else {
        base.classList.add('transition');
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
        base.classList.remove('transition');
    }
}
if (currentTheme === null) {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}
if (currentTheme == "dark") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
}