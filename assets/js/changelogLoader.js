// Changelog Loader /////// By acegoal07 /////////////////////////////////////////////////////////
window.addEventListener("load", () => {
   let count = 0;
   const pastVersionChangeLog = [];
   $.getJSON(document.querySelector("#changelog-info").getAttribute("changelog-url"),
      function (data) {
         for (const info of data) {
            // Changes
            count++;
            const infoArray = [];
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
                     <h5 class="card-title fw-bold">Changes:</h5>
                     <p class="card-text">
                        <ul>
                           ${infoArray.join('')}
                        </ul>
                     </p>
                  </div>
               </div><br>`;
            // Set current
            if (count == 1) {document.querySelector('#currentVersion').insertAdjacentHTML("afterbegin", change);}
            // Set previous
            else if (count == 2) {document.querySelector('#previousVersion').insertAdjacentHTML("afterbegin", change);}
            // Create array list of older versions
            else {pastVersionChangeLog.push(change);}
         }
         // Set old versions
         document.querySelector('#pastVersion').insertAdjacentHTML("afterbegin", pastVersionChangeLog.join(''));
      }
   );
// ShowMore button ///////////////////////////////////////////////////////////////////////////////
   document.querySelector("#moreListButton").addEventListener("click", () => {
      const button = document.querySelector("#moreListButton");
      if (document.querySelector("#moreList").classList.toggle("d-none")) {
         button.textContent = "Show More";
         button.classList.add("mb-2");
      } else {
         button.textContent = "Show Less";
         button.classList.remove("mb-2");
      }
   });
});