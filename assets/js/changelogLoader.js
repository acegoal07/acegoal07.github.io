// Changelog Loader /////// By acegoal07 /////////////////////////////////////////////////////////
window.addEventListener("load", () => {
   let count = 0;
   $.getJSON(document.querySelector("#changelog-info").getAttribute("changelog-url"),
      function (data) {
         for (const info of data) {
            // Changes
            count++;
            // Create card
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'bg-body-secondary');
            // Header
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('card-header', 'rounded-top', 'bg-body-tertiary');
            headerDiv.textContent = `Version ${info.version}`;
            // Append header to card
            cardDiv.appendChild(headerDiv);
            // Body
            const bodyDiv = document.createElement('div');
            bodyDiv.classList.add('card-body', 'rounded-bottom');
            // Title
            const title = document.createElement('h3');
            title.classList.add('card-title', 'fw-bold');
            title.textContent = 'Changes:';
            // Append title to body
            bodyDiv.appendChild(title);
            // Text
            const text = document.createElement('p');
            text.classList.add('card-text');
            // List
            const ul = document.createElement('ul');
            for (const changes of info.changes) {
               const li = document.createElement('li');
               const p = document.createElement('p');
               p.textContent = changes;
               li.appendChild(p);
               ul.appendChild(li);
            }
            // Append list to text
            text.appendChild(ul);
            // Append text to body
            bodyDiv.appendChild(text);
            // Append body to card
            cardDiv.appendChild(bodyDiv);

            // Set current version change log
            if (count == 1) {
               document.querySelector('#currentVersion').appendChild(cardDiv);
            }
            // Set previous version change log
            else if (count == 2) {
               document.querySelector('#previousVersion').appendChild(cardDiv);
            }
            // Set past version change log
            else {
               cardDiv.classList.add("mb-3")
               document.querySelector('#pastVersion').appendChild(cardDiv);
            }
         }
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