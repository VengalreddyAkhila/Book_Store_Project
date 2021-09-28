window.addEventListener('DOMContentLoaded', (event) => {
  GetBooks();
});
//const Baseurl2 = "https://new-bookstore-backend.herokuapp.com/";
let BooksList = [];
var images = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
var path = "../Assests/";

function GetBooks() {
 

  getService("​/bookstore_user/get/book", headerconfig)
  .then(res=> {
      console.log(res.data.result);
      console.log(res.data.result.length);
      var nHTML = '';
      BooksList = res.data.result;
      let bookCountHTML = ``;
      bookCountHTML += `<span>(` + BooksList.length + ` items)</span>`
      document.getElementById("homepage-book-count").innerHTML = bookCountHTML;
      // let pages = [];
      // pages = BooksList.splice(0,8);
      // console.log(pages);

      for (var i = 0; i < BooksList.length; i++) {
        console.log(BooksList[i])
        
        nHTML += `
          
          <div class="main-section">
          <div class="sub-section" id="sub-section" >
              <div class="sec" id="`+ BooksList[i].bookName + `">
          <div class="books">
              <img class="img" src = "`+ path + images[i] + `" alt="" >
              </div>
              <div class="book-text" id="book-text" >
              <h1 class="main-text">`+ BooksList[i].bookName + `</h1>
              <h class="sub-text">` + BooksList[i].author + `</h>
              <p class="rating" >4.5 *</p>
              <div class="cost">Rs.` + BooksList[i].price + `</div>
          </div>
          </div>
         
          </div>        
          </div>`
      }
      document.getElementById("main-list").innerHTML = nHTML;
      console.log(i)
    })

    .catch((err) => {
      console.log(err);
    })
}

$(document).on('click', '.sec', (event) => {
  console.log(event.currentTarget.id)
  let str = `../Pages/singlebook.html?bookName=${event.currentTarget.id}`
  window.location.href = str;
})

