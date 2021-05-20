const currentTheme = localStorage.getItem("setTheme");
var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme';
    link.type = 'text/css'
    if (currentTheme == 'dark') {
        link.href = '/Resources/CSS/theme/dark.css';
        document.getElementById('base').classList.remove('disable-transitions');
    } else {
        link.href = '/Resources/CSS/theme/light.css';
        document.getElementById('base').classList.remove('disable-transitions');
    }
    document.head.appendChild(link);
var theme = document.getElementById('theme');    
if (currentTheme === null) {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}
function toggleTheme() {
    if (theme.getAttribute('href') == '/Resources/CSS/theme/light.css') {
        theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
        document.getElementById('base').classList.remove('disable-transitions');
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
        document.getElementById('base').classList.remove('disable-transitions');
    }
}
// Use else if for multiple themes