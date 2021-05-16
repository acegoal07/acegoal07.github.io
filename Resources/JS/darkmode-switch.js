var theme = document.getElementById('theme');
/*const storage = localStorage.setItem("setTheme", "no-theme");*/

const currentTheme = localStorage.getItem("setTheme");

if (currentTheme == "dark") {
    theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
}

function toggleTheme() {
    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'Resources/CSS/theme/light.css') {
        theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
}

if (currentTheme == ("")) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
        localStorage.setItem("setTheme", "dark");
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
        localStorage.setItem("setTheme", "light");
    }
})
} if (currentTheme == "dark") {
    theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
} else {
    theme.setAttribute('href', 'Resources/CSS/theme/light.css');
}