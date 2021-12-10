
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ThemeHandler ////// Version: 2.0 //////////////////////////////////////////////////////////////////////////////////////
const currentTheme = localStorage.getItem("setTheme");
const lightTheme = '/Resources/CSS/theme/light.css';
const darkTheme = '/Resources/CSS/theme/dark.css';
    var link = document.getElementById('theme');
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem("setTheme", "dark");
                link.href = darkTheme;
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                localStorage.setItem("setTheme", "light");
                link.href = lightTheme;
            } else {
                localStorage.setItem("setTheme", "light");
                link.href = lightTheme;
            }
        } else if (currentTheme === 'dark') {
            link.href = darkTheme;
        } else {
            link.href = lightTheme;
        }
        document.head.appendChild(link);
        document.onreadystatechange = () => {
            if (document.readyState === 'loading') {
                const currentTheme = localStorage.getItem("setTheme");
                document.getElementById('base').classList.remove('disable-transitions');
                if (currentTheme === "dark") {
                    document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
                    document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
                } else if (currentTheme === "light") {
                    document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                    document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
                } else {
                    document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                    document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
                }
            }
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
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
        });
    function toggleTheme() {
        const currentTheme = localStorage.getItem("setTheme");
        if (currentTheme === "light") {
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