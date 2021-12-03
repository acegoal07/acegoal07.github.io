

const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
    var link = document.getElementById('theme');
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                link.href = darkTheme;
                localStorage.setItem("setTheme", "dark");
            } else {
                link.href = lightTheme;
                localStorage.setItem("setTheme", "light");
            }
        } else if (currentTheme === 'light') {
            link.href = lightTheme;
        } else {
            link.href = darkTheme;
        }
        document.head.appendChild(link);
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                document.getElementById('base').classList.remove('disable-transitions');
                if (currentTheme === "dark") {
                    localStorage.setItem("setTheme", "dark");
                    document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
                    document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
                } else if (currentTheme === "light") {
                    localStorage.setItem("setTheme", "light");
                    document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                    document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
                } else if (currentTheme === null) {
                    if (window.matchMedia('prefers-color-scheme: dark').matches) {
                        link.setAttribute('href', darkTheme);
                        localStorage.setItem("setTheme", "dark");
                        document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
                        document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
                    } else {
                        link.setAttribute('href', lightTheme);
                        localStorage.setItem("setTheme", "light");
                        document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                        document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
                    }
                }
            }
        }
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