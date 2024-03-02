// Version grabber /////// By acegoal07 //////////////////////////////////////////////////////////
window.addEventListener("load", () => {
   this.document.querySelectorAll(".project-version-grabber").forEach(location => {
      fetch(location.getAttribute("version-location")).then(res =>
         res.json()
      ).then((data) =>
         location.textContent = `Latest version: ${data.version ? data.version : data[0].version}`
      ).catch(err => console.error(err));
   });
});