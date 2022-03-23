var count = 0;
var currentVersion;
var previousVersion;
var pastVersion = [];
$.getJSON("/projects/sierra/json/changelog.json",
   function (data) {
      for (info of data) {
         count += 1;
         // Changes
         let changesArray = [];
         for (changes of info.changes) {
            changesArray.push(`<li><p>${changes}</p></li>`);
         }
         // Card
         var card = 
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
         // Create current
         if (count == 1) {currentVersion = card;}
         // Create previous
         else if (count == 2) {previousVersion = card;}
         // Create all old
         else {pastVersion.push(card)}
      }
      // Set current
      const currentSet = document.getElementById('currentVersion');
      currentSet.innerHTML = currentVersion;
      // Set previous
      const previousSet = document.getElementById('previousVersion');
      previousSet.innerHTML = previousVersion;
      // Set old
      const pastSet = document.getElementById('pastVersion');
      pastSet.innerHTML = pastVersion.join('');
   })