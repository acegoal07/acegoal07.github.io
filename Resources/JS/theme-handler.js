var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("setTheme");
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
if (currentTheme == ('')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
        base.classList.remove("preload");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
        base.classList.remove("preload");
    }
})
} if (currentTheme == "dark") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
    base.classList.remove("preload");
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
    base.classList.remove("preload");
}

  