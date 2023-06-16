// Theme Handler /////// By acegoal07 ////////////////////////////////////////////////////////////
(() => {
   /**
    * setCookie
    * Stores a cookie with the name and value that's provided
    * @param {String} name The name of the cookie
    * @param {any} value The value of the cookie
    * @param {"Strict" | "Lax" | "None"} SameSite The type of SameSite to use
    */
   const setCookie = function(name, value, SameSite = "Strict") {
      const date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toString()}`;
      document.cookie = `${name  }=${  value || ""  };${  expires }; SameSite=${ SameSite }; path=/`;
   }
   /**
    * getCookie
    * Get's the value of the cookie with the provided name
    * @param {String} name The name of the cookie
    * @returns {any} The value of the cookie
    */
   const getCookie = function(name) {
      const nameEQ = name + "=";
      const documentCookies = document.cookie.split(';');
      for(const element of documentCookies) {
         let cookie = element;
         while (cookie.startsWith(' ')) {cookie = cookie.substring(1,cookie.length);}
         if (cookie.startsWith(nameEQ)) {return cookie.substring(nameEQ.length,cookie.length);}
      }
      return null;
   }
   /**
    * Gets the theme preference stored in the cookies
    */
   const storedTheme = getCookie("theme");
   /**
    * Gets what the stored theme is and if no theme is already selected
    * checks system preference for the option
    * @returns {"dark" | "light" | "auto"}
    */
   const getPreferredTheme = () => {
      if (storedTheme) {
         return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
   }
   /**
    * Sets the body data for the theme to be activated
    * @param {"dark" | "light" | "auto"} theme The theme to be set
    */
   const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
         document.documentElement.setAttribute('data-bs-theme', theme);
      }
   }
   // Sets body theme information on load
   setTheme(getPreferredTheme());
   /**
    * Handles all the information for the theme buttons
    * @param {"dark" | "light" | "auto"} theme The theme to be set
    * @param {Boolean} focus Whether or not to focus the button
    * @returns {void}
    */
   const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme');
      // Checks whether theme buttons are present
      if (!themeSwitcher) {
         return void(0);
      }
      // Adds SVGs to the page if buttons are present
      document.querySelector("nav").insertAdjacentHTML(
         "afterbegin",
         `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="circle-half" viewBox="0 0 16 16">
               <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
            </symbol>
            <symbol id="moon-stars-fill" viewBox="0 0 16 16">
               <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
               <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </symbol>
            <symbol id="sun-fill" viewBox="0 0 16 16">
               <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </symbol>
            <symbol id="check2" viewBox="0 0 16 16">
               <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
            </symbol>
         </svg>`
      );
      // Get all sections of the buttons ready and stored for use in adjusting on button press
      const themeSwitcherText = document.querySelector('#bd-theme-text');
      const activeThemeIcon = document.querySelector('.theme-icon-active use');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');
      // Sets all buttons back to unselected to make sure only the one pressed is active
      document.querySelector("nav").querySelectorAll('[data-bs-theme-value]').forEach(element => {
         element.classList.remove('active');
         element.setAttribute('aria-pressed', 'false');
         if (!element.querySelector(".theme-tick").classList.contains("d-none")) {
            element.querySelector(".theme-tick").classList.add("d-none");
         }
      });
      // Sets the button pressed as active and adjust svg used
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
      activeThemeIcon.setAttribute('href', svgOfActiveBtn);
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
      document.querySelector(`[data-bs-theme-value="${theme}"] .theme-tick`).classList.remove("d-none");
      // If focus true sets button as focused
      if (focus) {
         themeSwitcher.focus();
      }
   }
   // Watches system preferences to detect a change in preference and change set theme if
   // no theme preference is not stored
   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
         setTheme(getSystemPreferred());
      } else {
         void(0);
      }
   });
   // Add listeners to theme buttons
   document.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(!storedTheme ? "auto" : getPreferredTheme());
      document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
         toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value');
            setCookie("theme", theme);
            setTheme(theme);
            showActiveTheme(theme, true);
         });
      });
   });
})();