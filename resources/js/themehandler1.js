// Theme Handler /////////////////////////////////////////////////////////////////////////////////
(() => {
   'use strict'
   const storedTheme = getCookie("theme")
   const getPreferredTheme = () => {
      if (storedTheme) {
         return storedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
   }
   const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
         document.documentElement.setAttribute('data-bs-theme', theme)
      }
   }
   setTheme(getPreferredTheme())
   const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
      if (!themeSwitcher) {
         return
      }
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
         element.classList.remove('active')
         element.setAttribute('aria-pressed', 'false')
         if (!element.querySelector(".theme-tick").classList.contains("d-none")) {
            element.querySelector(".theme-tick").classList.add("d-none")
         }
      })
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
      document.querySelector(`[data-bs-theme-value="${theme}"] .theme-tick`).classList.remove("d-none")
   
      if (focus) {
         themeSwitcher.focus()
      }
   }
   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
         setTheme(getPreferredTheme())
      }
   })
   document.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
      document.querySelectorAll('[data-bs-theme-value]')
         .forEach(toggle => {
            toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setCookie("theme", theme)
            setTheme(theme)
            showActiveTheme(theme, true)
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
 */
function setCookie(name,value) {
   let date = new Date();
   date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
   const expires = "expires=" + date.toUTCString();
   document.cookie = name + "=" + (value || "")  +";" + expires+ "; path=/";
}
/**
 * getCookie
 * Get's the value of the cookie with the provided name
 * @param {String} name The name of the cookie
 * @returns {any} The value of the cookie
 */
function getCookie(name) {
   let nameEQ = name + "=";
   let ca = document.cookie.split(';');
   for(const element of ca) {
       let c = element;
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}