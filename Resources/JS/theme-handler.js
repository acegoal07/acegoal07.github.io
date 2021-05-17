var theme = document.getElementById('theme');
const currentTheme = localStorage.getItem("setTheme");
var base = document.getElementsByTagName('html');
  
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
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

if (document.readyState === 'complete') {
    console.clear();
}
  