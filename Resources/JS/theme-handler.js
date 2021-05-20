const currentTheme = localStorage.getItem("setTheme");
var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme';
    link.type = 'text/css'
    if (currentTheme == 'dark') {
        link.href = '/Resources/CSS/theme/dark.css';
    } else {
        link.href = '/Resources/CSS/theme/light.css';
    }
    document.head.appendChild(link);
if (document.readyState === 'complete') {
    console.log('web-page has loaded')
    document.getElementById('base').classList.remove('disable-transitions');
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