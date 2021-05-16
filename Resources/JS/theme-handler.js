var theme = document.getElementById('theme');

const currentTheme = localStorage.getItem("setTheme");

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
        theme-animation.style.transition('none');
    } else {
        theme.setAttribute('href', '/Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
        theme-animation.style.transition('none');
    }
})
} if (currentTheme == "dark") {
    theme.setAttribute('href', '/Resources/CSS/theme/dark.css');
    theme-animation.style.transition('none');
} else {
    theme.setAttribute('href', '/Resources/CSS/theme/light.css');
    theme-animation.style.transition('none');
}