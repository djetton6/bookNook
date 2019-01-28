$(document).ready(function() {
  $("#book-form").submit(function() {
    let search = $("#books-query").val();

    if (search == "") {
      alert("Please enter a book to search");
    } else {
      //Return all the API elements for
      let img = "";
      let title = "";
      let author = "";
      let publisher = "";

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(
        response
      ) {
        console.log(response);
      });
    }
  });
  //In case they leave the search query field blank
  return false;
});
