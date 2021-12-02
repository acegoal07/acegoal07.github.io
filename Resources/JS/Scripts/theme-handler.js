

const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
const icon = document.getElementById('themeSwitch');
    var link = document.getElementById('theme');
        if (currentTheme == 'dark') {
            link.href = darkTheme;
            icon.classList.add('bi bi-brightness-high-fill');
        } else {
            link.href = lightTheme;
            icon.classList.add('bi bi-moon-fill');
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
                theme.setAttribute('href', darkTheme);
                localStorage.setItem("setTheme", "dark");
                icon.classList.add('bi bi-brightness-high-fill');
            } else {
                theme.setAttribute('href', lightTheme);
                localStorage.setItem("setTheme", "light");
                icon.classList.add('bi bi-moon-fill');
            }
        }
    function toggleTheme() {
        if (theme.getAttribute('href') == lightTheme) {
            theme.setAttribute('href', darkTheme);
            localStorage.setItem("setTheme", "dark");
            icon.classList.add('bi bi-brightness-high-fill');
        } else {
            theme.setAttribute('href', lightTheme);
            localStorage.setItem("setTheme", "light");
            icon.classList.add('bi bi-moon-fill');
        }
    }