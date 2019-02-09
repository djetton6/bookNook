$(document).ready(function() {
  $("#book-form").submit(function(e) {
    e.preventDefault();
    let search = $("#books-query").val();

    if (search == "") {
      alert("Please enter a book to search");
    } else {
      //Return all the API elements for query

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(
        response
      ) {
        const searchResultsDiv = document.querySelector("#search-results");
        //Loop over JSON to show book properties
        for (i = 0; i < response.items.length; i++) {
          const item = response.items[i];
          const itemDiv = document.createElement("div");
          itemDiv.innerHTML = `<div>
                                <h2 id="book-title">${
                                  item.volumeInfo.title
                                }</h2>
                                <img src=${
                                  item.volumeInfo.imageLinks.thumbnail
                                } />
                                ${item.volumeInfo.authors.length &&
                                  "<b>Authors:</b> <ul>" +
                                    item.volumeInfo.authors
                                      .map(author => {
                                        return `<li>${author}</li>`;
                                      })
                                      .join("") +
                                    "</ul>"}
                                <b>Publisher:</b> ${item.volumeInfo.publisher}
                                <a target=_blank id="more-info" href=${
                                  item.volumeInfo.previewLink
                                } >Learn More...</a></button>
                              </div>`;
          searchResultsDiv.append(itemDiv);
        }
      });
    }
  });
  //In case they leave the search query field blank
  return false;
});
