// JavaScript code to manipulate the DOM
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const outputDiv = document.getElementById("output");
    
    submitButton.addEventListener("click", function() {
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      
      const message = "Title: " + title + "<br>Author: " + author;
      
      outputDiv.innerHTML = message;

    });
});