$(document).ready(function() {
  $("#book-form").submit(function() {
    let search = $("#books-query").val();
    console.log(search);
  });
  //In case they leave the search query field blank
  return false;
  console.log("Page Loaded");

  $("#submitButton").click(function() {
    alert("Testing Testing!");
  });
});
