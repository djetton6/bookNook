$(document).ready(function() {
  $("#book-form").submit(function() {
    let search = $("#books-query").val();

    if (search == "") {
      alert("Please enter a book to search");
    } else {
      console.log("testing");
      //Return all the API elements for query
      let img = "";
      let title = "";
      let authors = "";
      let publisher = "";

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(
        response
      ) {
        console.log(response);
        //Loop over JSON to show book properties
        for(i=0;i<response.items.length;i++)
        { 
          
        }
      });
    }
  });
  //In case they leave the search query field blank
  return false;
});
