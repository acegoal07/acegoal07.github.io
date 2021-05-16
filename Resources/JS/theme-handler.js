var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("setTheme");
var a = document.getElementById('base')
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}
if (currentTheme == ('')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
        a.classList.remove("preload");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
        a.classList.remove("preload");
    }
})
} if (currentTheme == "dark") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
    a.classList.remove("preload");
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
    a.classList.remove("preload");
}

  