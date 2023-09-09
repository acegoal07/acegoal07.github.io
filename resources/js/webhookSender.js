window.addEventListener("load", () => {
   const date = new Date();
   const fileData = [
      `Date: ${date.toLocaleDateString("en-UK")}\n`,
      `Time: ${date.toLocaleTimeString("en-UK")}\n`
   ];
   var formData = new FormData();
   formData.append("file", new File(fileData, `Issue-${date.toLocaleString("en-uk")}.txt`, {type: "text/plain"}));
   formData.append("content", "New issue reported");
   const xml = new XMLHttpRequest();
   xml.open("POST", `${process.env.ISSUE_WEBHOOK_URL}`);
   xml.send(formData);
}); 