// CopyButtonContent ////// Version: 1.0 ////// By acegoal07 (can be found on twitter) /////////////////////////////////////
window.addEventListener("load", () => {
   this.document.querySelectorAll("a.copy-data-button").forEach(button => {
      button.addEventListener("click", function() {
         navigator.clipboard.writeText(button.getAttribute("copy-data"));
         const originalText = button.textContent;
         button.textContent = "Copied content";
         setTimeout(() => {
            button.textContent = originalText;
         }, 5000);
      });
   });
});