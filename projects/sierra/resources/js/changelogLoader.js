// Load
let count = 0;
const pastVersionChangeLog = [];
$.getJSON("https://raw.githubusercontent.com/acegoal07/acegoal07.github.io/master/projects/sierra/resources/json/changelog.json",
   function (data) {
      for (const info of data) {
         count += 1;
         // Changes
         let changesArray = [];
         for (const changes of info.changes) {
            changesArray.push(`<li><p>${changes}</p></li>`);
         }
         // Card
         const change = 
            `<div class="card secondary-color">
               <div class="card-header rounded-top third-color">
                  Version ${info.version}
               </div>
               <div class="card-body rounded-bottom">
                  <h5 class="card-title">Changes</h5>
                  <p class="card-text">
                     <ul>
                        ${changesArray.join('')}
                     </ul>
                  </p>
               </div>
            </div><br>`
         // Set current
         if (count == 1) {document.getElementById('currentVersion').innerHTML= change;}
         // Set previous
         else if (count == 2) {document.getElementById('previousVersion').innerHTML = change;}
         // Create all old
         else {pastVersionChangeLog.push(change)}
      }
      // Set old
      const pastSet = document.getElementById('pastVersion');
      pastSet.innerHTML = pastVersionChangeLog.join('');
   }
)
// Show more button
function ShowMoreInfo() {
   let list = document.querySelector("#ShowMoreList");
   if (list.classList.contains("d-none")) {
      list.classList.remove('d-none');
      button.innerHTML = "Hide Versions";
   } else {
      list.classList.add('d-none');
      button.innerHTML = "Show Versions";
   }
}