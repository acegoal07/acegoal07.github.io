var theme = document.getElementById('theme');

function toggleTheme() {
    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'Resources/CSS/theme/light.css') {
        theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
    } else {
        theme.setAttribute('href', 'Resources/CSS/theme/light.css');
    }
}

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    theme.setAttribute('href', 'Resources/CSS/theme/dark.css');
  } else {
    theme.setAttribute('href', 'Resources/CSS/theme/light.css');
  }
})