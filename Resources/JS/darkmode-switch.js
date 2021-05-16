var theme = document.getElementById('theme');

const currentTheme = localStorage.getItem("setTheme");
if (currentTheme == "dark") {
    theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
}

function toggleTheme() {
    let setTheme = "light"
    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'Resources/CSS/theme/light.css') {
        theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
        setTheme = "dark";
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
        setTheme = "light"
    }
}

if (currentTheme == ('')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    let setTheme = "light"
    if (event.matches) {
        theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
        setTheme = "dark";
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
        setTheme = "light"
    }
    })
} if (currentTheme == "dark") {
    theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
} else {
    theme.setAttribute('href', 'Resources/CSS/theme/light.css');
}