///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ThemeEngine ////// Version: 3.0 //////////////////////////////////////////////////////////////////////////////////////
// On page load check for settings and system default
if (localStorage.getItem("setTheme") === null) {
   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem("setTheme", "dark");
      document.getElementById('base').classList.add("darkmode");
   } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
         localStorage.setItem("setTheme", "light");
         document.getElementById('base').classList.add("lightmode");
   } else {
         localStorage.setItem("setTheme", "light");
         document.getElementById('base').classList.add("lightmode");
   }
} else if (localStorage.getItem("setTheme") === 'dark') {
   document.getElementById('base').classList.add("darkmode");
} else {
   document.getElementById('base').classList.add("lightmode");
}
// Wait for page to finish loading to set buttons
document.onreadystatechange = () => {
   if (document.readyState === 'interactive') {
      const currentTheme = localStorage.getItem("setTheme");
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
// Watch out for system default changes and adjust to it
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', theme => {
   if (theme.matches) {
         document.getElementById('base').classList.replace("darkmode", "lightmode");
         localStorage.setItem("setTheme", "dark");
         document.getElementById('themeSwitch').classList.replace("bi-moon-fill", "bi-brightness-high-fill");
         document.getElementById('colThemeSwitch').classList.replace("bi-moon-fill", "bi-brightness-high-fill");
   } else {
         document.getElementById('base').classList.replace("lightmode", "darkmode");
         localStorage.setItem("setTheme", "light");
         document.getElementById('themeSwitch').classList.replace("bi-brightness-high-fill", "bi-moon-fill");
         document.getElementById('colThemeSwitch').classList.replace("bi-brightness-high-fill", "bi-moon-fill");
   }
});
// Button function to change theme
function toggleTheme() {
   const currentTheme = localStorage.getItem("setTheme");
   if (currentTheme === "light") {
      document.getElementById('base').classList.replace("lightmode", "darkmode");
      localStorage.setItem("setTheme", "dark");
      document.getElementById('themeSwitch').classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      document.getElementById('colThemeSwitch').classList.replace("bi-moon-fill", "bi-brightness-high-fill");
   } else {
      document.getElementById('base').classList.replace("darkmode", "lightmode");
      localStorage.setItem("setTheme", "light");
      document.getElementById('themeSwitch').classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      document.getElementById('colThemeSwitch').classList.replace("bi-brightness-high-fill", "bi-moon-fill");
   }
}