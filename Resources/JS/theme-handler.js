const currentTheme = localStorage.getItem("setTheme");
var link = document.getElementById('theme');
    if (currentTheme == 'dark') {
        link.href = '/Resources/CSS/theme/dark.css';
    } else {
        link.href = '/Resources/CSS/theme/light.css';
    }
    document.head.appendChild(link);
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('base').classList.remove('disable-transitions');
    }
}
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
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}