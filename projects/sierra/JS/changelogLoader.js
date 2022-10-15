document.onreadystatechange = () => {
   document.getElementById('changelog-info').classList.remove("d-none");
   document.getElementById('error').classList.add("d-none");
   if (localStorage.getItem("setTheme") === "dark") {
      document.getElementById('themeSwitch').classList.add("bi-brightness-high-fill");
      document.getElementById('colThemeSwitch').classList.add("bi-brightness-high-fill");
   } else {
      document.getElementById('themeSwitch').classList.add("bi-moon-fill");
      document.getElementById('colThemeSwitch').classList.add("bi-moon-fill");
   }
}

let count = 0;
const pastVersionChangeLog = [];
$.getJSON("https://raw.githubusercontent.com/acegoal07/acegoal07.github.io/master/projects/sierra/json/changelog.json",
   function (data) {
      for (const info of data) {
         count += 1;
         // Changes
         let changesArray = [];
         for (const changes of info.changes) {
            changesArray.push(`<li><p>${changes}</p></li>`);
         }
         // Card
         const card = 
            `<div class="card">
               <div class="card-header rounded-top border-top border-left border-right">
                  Version ${info.version}
               </div>
               <div class="card-body rounded-bottom border-bottom border-left border-right">
                  <h5 class="card-title">Changes</h5>
                  <p class="card-text">
                     <ul>
                        ${changesArray.join('')}
                     </ul>
                  </p>
               </div>
            </div><br>`
         // Set current
         if (count == 1) {document.getElementById('currentVersion').innerHTML= card;}
         // Set previous
         else if (count == 2) {document.getElementById('previousVersion').innerHTML = card;}
         // Create all old
         else {pastVersionChangeLog.push(card)}
      }
      // Set old
      const pastSet = document.getElementById('pastVersion');
      pastSet.innerHTML = pastVersionChangeLog.join('');
   })