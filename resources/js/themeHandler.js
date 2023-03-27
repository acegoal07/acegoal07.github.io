// ThemeEngine ////// Version: 5.0 ////// By acegoal07 (can be found on twitter) //////////////////////////////////////////
// On page load check for settings and system default
const html = document.querySelector("html");

document.onload = () => {
   if (localStorage.getItem("setTheme") === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         html.setAttribute("class", "darkmode");
         localStorage.setItem("setTheme", "dark");
      } else {
         localStorage.setItem("setTheme", "light");
      }
   } else {
      if (localStorage.getItem("setTheme") === 'dark') {
         html.classList.replace("lightmode","darkmode");
      } else {void(0);}  
   }
}

// if (localStorage.getItem("setTheme") === null) {
//    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       html.classList.replace("lightmode", "darkmode");
//       localStorage.setItem("setTheme", "dark");
//    } else {
//       localStorage.setItem("setTheme", "light");
//    }
// } else {
//    if (localStorage.getItem("setTheme") === 'dark') {
//       html.classList.replace("lightmode","darkmode");
//    } else {void(0);}  
// }

// Wait for page to finish loading to set buttons
document.onreadystatechange = () =>  {
   // If not 404 page set buttons
   if (document.readyState === "interactive" && !html.classList.contains("error-page")) {
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
      html.classList.replace("darkmode", "lightmode");
      localStorage.setItem("setTheme", "dark");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      html.classList.replace("lightmode", "darkmode");
      localStorage.setItem("setTheme", "light");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
});
// Button function to change theme
function themeButtonFunction() {
   if (localStorage.getItem("setTheme") === "light") {
      html.classList.replace("lightmode", "darkmode");
      localStorage.setItem("setTheme", "dark");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
      });
   } else {
      html.classList.replace("darkmode", "lightmode");
      localStorage.setItem("setTheme", "light");
      // If not 404 page set buttons
      if (!html.classList.contains("error-page")) document.querySelectorAll(".themeButton").forEach(button => {
         button.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
      });
   }
}