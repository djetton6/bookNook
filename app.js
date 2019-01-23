console.log("testing app under construction");
let submitButton = document.getElementById("submitButton");
let bookResults = document.getElementsByClassName("book-results");

submitButton.addEventListener("click", testingButton);
function testingButton() {
  document.getElementById("title").innerHTML = "Hello World";
}
