var count = 0;
$.getJSON("./json/changelog.json", 
   function (data) {
      console.log(data[0].version)
      for (info of data) {
         count += 1;

         let changesArray = [];
         for (changes of info.changes) {
            changesArray.push(`<li><p>${changes}</p></li>`);
         }

         if (count == 1) {
            const current = document.getElementById('currentVersion');
            current.innerHTML = 
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
            const current = document.getElementById('previousVersion');
            current.innerHTML = 
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
            const current = document.getElementById('pastVersion');
            current.innerHTML = 
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
      }
   })