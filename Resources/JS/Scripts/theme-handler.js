

const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
    var link = document.getElementById('theme');
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                link.href = darkTheme;
                localStorage.setItem("setTheme", "dark");
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                link.href = lightTheme;
                localStorage.setItem("setTheme", "light");
            } else {
                link.href = lightTheme;
                localStorage.setItem("setTheme", "light");
            }
        } else if (currentTheme === 'dark') {
            link.href = darkTheme;
        } else if (currentTheme === 'light') {
            link.href = lightTheme;
        }
        document.head.appendChild(link);
        document.onreadystatechange = async () => {
            if (document.readyState === 'interactive') {
                var themeSwitch = document.getElementById('themeSwitch').classList;
                var colThemeSwitch = document.getElementById('colThemeSwitch').classList;
                if (currentTheme === "dark") {
                    themeSwitch.add("bi-brightness-high-fill");
                    colThemeSwitch.add("bi-brightness-high-fill");
                } else if (currentTheme === "light") {
                    themeSwitch.classList.add("bi-moon-fill");
                    colThemeSwitch.add("bi-moon-fill");
                }
                document.getElementById('base').classList.remove('disable-transitions');
            }
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                theme.setAttribute('href', darkTheme);
                localStorage.setItem("setTheme", "dark");
                document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
                document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
            } else {
                theme.setAttribute('href', lightTheme);
                localStorage.setItem("setTheme", "light");
                document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
            }
        });
    function toggleTheme() {
        if (theme.getAttribute('href') == lightTheme) {
            theme.setAttribute('href', darkTheme);
            localStorage.setItem("setTheme", "dark");
            document.getElementById('themeSwitch').classList.remove("bi-moon-fill");
            document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.remove("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
        } else {
            theme.setAttribute('href', lightTheme);
            localStorage.setItem("setTheme", "light");
            document.getElementById('themeSwitch').classList.remove("bi-brightness-high-fill");
            document.getElementById('themeSwitch').classList.add("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.remove("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
        }
    }