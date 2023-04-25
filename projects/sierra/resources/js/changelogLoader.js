// Changelog Loader ////// Version: 2.0 ////// By acegoal07 (can be found on twitter) /////////////////////////////////////
window.addEventListener("load", () => {
   let count = 0;
   const pastVersionChangeLog = [];
   const url = document.querySelector("#changelog-info").getAttribute("href");
   $.getJSON(url,
      function (data) {
         for (const info of data) {
            count += 1;
            // Changes
            let infoArray = [];
            for (const changes of info.changes) {
               infoArray.push(`<li><p>${changes}</p></li>`);
            }
            // Card
            const change =
               `<div class="card bg-body-secondary">
                  <div class="card-header rounded-top bg-body-tertiary">
                     Version ${info.version}
                  </div>
                  <div class="card-body rounded-bottom">
                     <h5 class="card-title">Changes</h5>
                     <p class="card-text">
                        <ul>
                           ${infoArray.join('')}
                        </ul>
                     </p>
                  </div>
               </div><br>`
            // Set current
            if (count == 1) {document.getElementById('currentVersion').insertAdjacentHTML("afterbegin", change)}
            // Set previous
            else if (count == 2) {document.getElementById('previousVersion').insertAdjacentHTML("afterbegin", change)}
            // Create all old
            else {pastVersionChangeLog.push(change)}
         }
         // Set old
         document.getElementById('pastVersion').insertAdjacentHTML("afterbegin", pastVersionChangeLog.join(''));
      }
   )
// ShowMore button ////////////////////////////////////////////////////////////////////////////////////////////////////////
   document.querySelector("#moreListButton").addEventListener("click", () => {
      let list = document.querySelector("#moreList");
      let button = document.querySelector("#moreListButton");
      if (list.classList.toggle("d-none")) {
         button.textContent = "Show More";
         button.classList.add("mb-2")
      } else {
         button.textContent = "Show Less";
         button.classList.remove("mb-2");
      }      
   })
})