var count = 0;
var currentVersion;
var previousVersion;
var pastVersion = [];
$.getJSON("./json/changelog.json", 
   function (data) {
      for (info of data) {
         count += 1;

         let changesArray = [];
         for (changes of info.changes) {
            changesArray.push(`<li><p>${changes}</p></li>`);
         }

         if (count == 1) {
            currentVersion = 
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
         }
         
         else if (count == 2) {
            previousVersion = 
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
         }

         else {
            pastVersion.push(
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
            )
         }
      }
      const currentSet = document.getElementById('currentVersion');
      currentSet.innerHTML = currentVersion;
      const previousSet = document.getElementById('previousVersion');
      previousSet.innerHTML = previousVersion;
      const pastSet = document.getElementById('pastVersion');
      pastSet.innerHTML = pastVersion.join('');
   })