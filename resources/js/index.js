///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ThemeEngine ////// Version: 4.0 ////// By acegoal07 (can be found on twitter) //////////////////////////////////////////
// On page load check for settings and system default
if (localStorage.getItem("setTheme") === null) {
   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem("setTheme", "dark");
      document.querySelector("html").classList.replace("lightmode", "darkmode");
   } else {
      localStorage.setItem("setTheme", "light");
   }
} else if (localStorage.getItem("setTheme") === 'dark') {
   document.querySelector("html").classList.replace("lightmode","darkmode");
} else {void(0);}
// Wait for page to finish loading to set buttons
document.onreadystatechange = () => {
   // If not 404 page set buttons
   if (document.readyState === "interactive" && !document.querySelector("html").classList.contains("error-page")) {
      if (localStorage.getItem("setTheme") === "dark") {
         document.querySelectorAll(".themeButton").forEach(button => {
            button.classList.add("bi-brightness-high-fill");
         });
      } else {
         document.querySelectorAll(".themeButton").forEach(button => {
            button.classList.add("bi-moon-fill");
         });
      }
   }
}
// Watch out for system default changes and adjust to it
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', theme => {
   if (theme.matches) {
      document.querySelector("html").classList.replace("darkmode", "lightmode");
      localStorage.setItem("setTheme", "dark");
      // If not 404 page set buttons
      if (!document.querySelector("html").classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      document.querySelector("html").classList.replace("lightmode", "darkmode");
      localStorage.setItem("setTheme", "light");
      // If not 404 page set buttons
      if (!document.querySelector("html").classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
});
// Button function to change theme
function themeButtonFunction() {
   if (localStorage.getItem("setTheme") === "light") {
      document.querySelector("html").classList.replace("lightmode", "darkmode");
      localStorage.setItem("setTheme", "dark");
      // If not 404 page set buttons
      if (!document.querySelector("html").classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      document.querySelector("html").classList.replace("darkmode", "lightmode");
      localStorage.setItem("setTheme", "light");
      // If not 404 page set buttons
      if (!document.querySelector("html").classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
}