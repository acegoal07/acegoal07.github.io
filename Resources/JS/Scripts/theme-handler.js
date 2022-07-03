
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ThemeHandler ////// Version: 3.0 //////////////////////////////////////////////////////////////////////////////////////
const currentTheme = localStorage.getItem("setTheme");
         
         document.onreadystatechange = () => {
            if (document.readyState === 'interactive') {
               const currentTheme = localStorage.getItem("setTheme");
               if (currentTheme === "dark") {
                  document.getElementById('themeSwitch').classList.toggle("bi-brightness-high-fill");
                  document.getElementById('colThemeSwitch').classList.toggle("bi-brightness-high-fill");
               } else if (currentTheme === "light") {
                  document.body.classList.toggle("darkmode");
                  document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
                  document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
               } else {
                  document.body.classList.toggle("darkmode");
                  document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
                  document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
               }
               document.getElementById('base').classList.toggle('disable-transitions');
            }
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
               localStorage.setItem("setTheme", "dark");
               document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
               document.getElementById('themeSwitch').classList.toggle("bi-brightness-high-fill");
               document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
               document.getElementById('colThemeSwitch').classList.toggle("bi-brightness-high-fill");
            } else {
               document.body.classList.toggle("darkmode");
               localStorage.setItem("setTheme", "light");
               document.getElementById('themeSwitch').classList.toggle("bi-brightness-high-fill");
               document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
               document.getElementById('colThemeSwitch').classList.toggle("bi-brightness-high-fill");
               document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
            }
        });

    function toggleTheme() {
        const currentTheme = localStorage.getItem("setTheme");
        if (currentTheme === "light") {
            document.body.classList.toggle("darkmode");
            localStorage.setItem("setTheme", "dark");
            document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
            document.getElementById('themeSwitch').classList.toggle("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.toggle("bi-brightness-high-fill");
        } else {
            document.body.classList.toggle("darkmode");
            localStorage.setItem("setTheme", "light");
            document.getElementById('themeSwitch').classList.toggle("bi-brightness-high-fill");
            document.getElementById('themeSwitch').classList.toggle("bi-moon-fill");
            document.getElementById('colThemeSwitch').classList.toggle("bi-brightness-high-fill");
            document.getElementById('colThemeSwitch').classList.toggle("bi-moon-fill");
        }
    }