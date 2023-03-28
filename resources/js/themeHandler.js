// ThemeEngine ////// Version: 5.0 ////// By acegoal07 (can be found on twitter) //////////////////////////////////////////
// On page load check for settings and system default
const html = document.querySelector("html");

document.onload() = () => {
   int();
}

function int() {
   document.documentElement.setAttribute("data-theme", localStorage.getItem('theme') || 'light');
}


// Wait for page to finish loading to set buttons
document.addEventListener("DOMContentLoaded", () => {
   // If not 404 page set buttons
   if (document.readyState === "interactive" && !html.classList.contains("error-page")) {
      if (localStorage.getItem("theme") === "dark") {
         document.querySelectorAll(".themeButton").forEach(button => {
            button.classList.add("bi-brightness-high-fill");
         });
      } else {
         document.querySelectorAll(".themeButton").forEach(button => {
            button.classList.add("bi-moon-fill");
         });
      }
   }
})
// Watch out for system default changes and adjust to it
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', theme => {
   if (theme.matches) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "dark");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "light");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
});
// Button function to change theme
function themeButtonFunction() {
   if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
}

// Store cookie
function themeCookie() {
   document.cookie = localStorage.getItem("theme");
}