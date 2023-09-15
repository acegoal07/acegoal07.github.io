// Command Loader /////// By acegoal07 /////////////////////////////////////////////////////////
window.addEventListener("load", () => {
// Search bar
   document.querySelectorAll(".command-search-bar").forEach(searchBar => {
      searchBar.value = "";
      searchBar.addEventListener("input", function() {
         const userInput = searchBar.value.toLowerCase();
         for (const child of document.querySelector(`div[command-section=${searchBar.getAttribute("command-section")}]`).children) {
            if ((!userInput || child.getAttribute("data-command-name").includes(userInput)) && child.classList.contains("d-none")) {
               child.classList.remove("d-none")
            }
            if (!child.getAttribute("data-command-name").includes(userInput) && !child.classList.contains("d-none")) {
               child.classList.add("d-none");
            }
         }
      });
   });
// Information
   for (const section of document.querySelectorAll(".command-section")) {
      $.getJSON(section.getAttribute("command-info-url"), function(data) {
         let count = 0;
         const prefixSection = section.getAttribute("command-section");
         for (const command of data) {
            const usageData = [];
            if (command.usage) {command.usage.forEach(usage => {usageData.push(`[${usage}]`)})}
            section.insertAdjacentHTML("beforeend",
               `<div class="card bg-body-secondary mt-2" data-command-name="${command.command}">
                  <div class="card-body">
                     <div>
                        <button class="card-title btn border-0 fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${prefixSection}${count}" aria-expanded="false" aria-controls="collapse${prefixSection}${count}">
                           <h3 class="d-inline fw-bold"c><i class="dropdown-arrow"></i> ${command.command}</h3> ${command.usage ? `<p class="text-muted d-inline">${usageData.join(" ")}</p>` : ``}
                        </button>
                     </div>
                     <div class="collapse" id="collapse${prefixSection}${count}">
                        ${command.description}
                     </div>
                  </div>
               </div>`
            );
            count++;
         }
      });
   }
});