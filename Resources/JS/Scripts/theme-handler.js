

const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
    var link = document.getElementById('theme');
        if (currentTheme == 'dark') {
            link.href = darkTheme;
            document.getElementById('themeSwitch').classList.add('<i class="bi bi-moon-fill"></i>');
        } else {
            link.href = lightTheme;
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
            } else {
                theme.setAttribute('href', lightTheme);
                localStorage.setItem("setTheme", "light");
            }
        }
    function toggleTheme() {
        if (theme.getAttribute('href') == lightTheme) {
            theme.setAttribute('href', darkTheme);
            localStorage.setItem("setTheme", "dark");
        } else {
            theme.setAttribute('href', lightTheme);
            localStorage.setItem("setTheme", "light");
        }
    }