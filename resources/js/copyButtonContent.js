window.addEventListener("load", function() {
   this.document.querySelectorAll("a.copy-data-button").forEach(button => {
      button.addEventListener("click", function() {
         navigator.clipboard.writeText(button.getAttribute("copy-data"));
      });
   });
});