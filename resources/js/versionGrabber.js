// Version grabber /////// By acegoal07 //////////////////////////////////////////////////////////
window.addEventListener("load", () => {
   this.document.querySelectorAll(".project-version-grabber").forEach(location => {
      let version = null;
      fetch(location.getAttribute("version-location")).then(
         res => res.json()
      ).then((out) => {
         if (!out.version) {
            version = out[0].version;
         } else {
            version = out.version;
         }
         location.innerHTML = `Latest version: ${version}`;
      }).catch(err => console.error(err));
   });
});