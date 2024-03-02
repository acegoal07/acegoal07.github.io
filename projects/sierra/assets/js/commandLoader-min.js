window.addEventListener("load",(()=>{document.querySelectorAll(".command-search-bar").forEach((n=>{n.value="",n.addEventListener("input",(function(){const t=n.value.toLowerCase();for(const a of document.querySelector(`div[command-section=${n.getAttribute("command-section")}]`).children)t&&!a.getAttribute("data-command-name").includes(t)||!a.classList.contains("d-none")||a.classList.remove("d-none"),a.getAttribute("data-command-name").includes(t)||a.classList.contains("d-none")||a.classList.add("d-none")}))}));for(const n of document.querySelectorAll(".command-section"))$.getJSON(n.getAttribute("command-info-url"),(function(t){let a=0;const e=n.getAttribute("command-section");for(const o of t){const t=[];o.usage&&o.usage.forEach((n=>{t.push(`[${n}]`)})),n.insertAdjacentHTML("beforeend",`<div class="card bg-body-secondary mt-2" data-command-name="${o.command}">\n                  <div class="card-body">\n                     <div>\n                        <button class="card-title btn border-0 fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${e}${a}" aria-expanded="false" aria-controls="collapse${e}${a}">\n                           <h3 class="d-inline fw-bold"c><i class="dropdown-arrow"></i> ${o.command}</h3> ${o.slash?'<i class="bi bi-slash-square text-muted"></i>':""} ${o.usage?`<p class="text-muted d-inline">${t.join(" ")}</p>`:""}\n                        </button>\n                     </div>\n                     <div class="collapse" id="collapse${e}${a}">\n                        <hr>\n                        <h3 class="fw-bold">Description</h3>\n                        ${o.description}\n                        ${o.usage?`\n                           <hr>\n                           <h3 class="pt-2 fw-bold">Inputs</h3>\n                           ${t.join(" ")}\n                        `:""}\n                        ${o.slash?`\n                           <hr>\n                           <h3 class="pt-2 fw-bold">Slash command info</h3>\n                           This command has a slash command alternative to the text based command so you are able to use <strong>/${o.command}</strong> instead\n                        `:""}\n                     </div>\n                  </div>\n               </div>`),a++}}))}));