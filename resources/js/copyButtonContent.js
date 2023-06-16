// Copy button content /////// By acegoal07 //////////////////////////////////////////////////////
window.addEventListener("load", () => {
   this.document.querySelectorAll("a.copy-data-button").forEach(button => {
      button.addEventListener("click", function() {
         const originalText = button.textContent;
         navigator.clipboard.writeText(button.getAttribute("copy-data")).then(() => {
            button.textContent = "Copied content";
            setTimeout(() => {
               button.textContent = originalText;
            }, 5000);
         }, () => {
            button.textContent = "Failed to copy";
            setTimeout(() => {
               button.textContent = originalText;
            }, 5000);
         });
      });
   });
});