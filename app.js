console.log("testing app under construction");
let submitButton = document.getElementById("submitButton");
let bookResults = document.getElementsByClassName("book-results");

submitButton.addEventListener("click", testingButton);
function testingButton() {
  document.getElementById("title").innerHTML = "Hello World";
}

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
