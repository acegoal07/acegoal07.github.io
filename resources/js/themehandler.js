// Theme Handler /////// By acegoal07 ////////////////////////////////////////////////////////////
(() => {
   'use strict'
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
      // Get all sections of the buttons ready and stored for use in adjusting on button press
      const themeSwitcherText = document.querySelector('#bd-theme-text');
      const activeThemeIcon = document.querySelector('.theme-icon-active use');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');
      // Sets all buttons back to unselected to make sure only the one pressed is active
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
         element.classList.remove('active');
         element.setAttribute('aria-pressed', 'false');
         if (!element.querySelector(".theme-tick").classList.contains("d-none")) {
            element.querySelector(".theme-tick").classList.add("d-none");
         }
      })
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
   })
   // Add listeners to theme buttons
   document.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(!storedTheme ? "auto" : getPreferredTheme());
      document.querySelectorAll('[data-bs-theme-value]')
         .forEach(toggle => {
            toggle.addEventListener('click', () => {
               const theme = toggle.getAttribute('data-bs-theme-value');
               setCookie("theme", theme);
               setTheme(theme);
               showActiveTheme(theme, true);
            })
         })
   })
})()
// Cookie Tools //////////////////////////////////////////////////////////////////////////////////
/**
 * setCookie
 * Stores a cookie with the name and value that's provided
 * @param {String} name The name of the cookie
 * @param {any} value The value of the cookie
 * @param {"Strict" | "Lax" | "None"} SameSite The type of SameSite to use
 */
function setCookie(name, value, SameSite = "Strict") {
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
function getCookie(name) {
   const nameEQ = name + "=";
   const documentCookies = document.cookie.split(';');
   for(const element of documentCookies) {
      let cookie = element;
      while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
      if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length,cookie.length);
   }
   return null;
}