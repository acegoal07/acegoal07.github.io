
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ThemeHandler ////// Version: 3.0 //////////////////////////////////////////////////////////////////////////////////////
const currentTheme = localStorage.getItem("setTheme");
        document.onreadystatechange = () => {
            if (document.readyState === 'interactive') {
               const currentTheme = localStorage.getItem("setTheme");
               if (currentTheme === "dark") {
                  document.body.classList.add("darkmode");
                  document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
                  document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
               } else if (currentTheme === "light") {
                  document.body.classList.remove("darkmode");
                  document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                  document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
               } else {
                  document.body.classList.remove("darkmode");
                  document.getElementById('themeSwitch').classList.add("bi-moon-fill");
                  document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
               }
               document.getElementById('base').classList.remove('disable-transitions');
            }
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
               document.body.classList.add("darkmode");
               localStorage.setItem("setTheme", "dark");
               document.getElementById('themeSwitch').classList.remove("bi-moon-fill");
               document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
               document.getElementById('colThemeSwitch').classList.remove("bi-moon-fill");
               document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
            } else {
               document.body.classList.remove("darkmode");
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
            document.body.classList.add("darkmode");
            localStorage.setItem("setTheme", "dark");
            document.getElementById('themeSwitch').classList.remove("bi-moon-fill");
            document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.remove("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
        } else {
            document.body.classList.remove("darkmode");
            localStorage.setItem("setTheme", "light");
            document.getElementById('themeSwitch').classList.remove("bi-brightness-high-fill");
            document.getElementById('themeSwitch').classList.add("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.remove("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
        }
    }