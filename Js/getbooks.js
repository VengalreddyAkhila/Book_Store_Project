window.addEventListener('DOMContentLoaded', (event) => {
  GetBooks();
});
const Baseurl0 = "https://new-bookstore-backend.herokuapp.com/";
let BooksList = [];
var images = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
var path = "../Assests/";
let searchbooks;
function GetBooks(searchbooks = '') {
 
  makePromiseCall("GET",`${Baseurl0}bookstore_user/get/book`,true,{},true)
  //getService("​/bookstore_user/get/book", headerconfig)
  .then(res=> {
    console.log(JSON.parse(res).result);    
    console.log(JSON.parse(res).result.length);    
      var nHTML = '';
      BooksList = JSON.parse(res).result;
      console.log(BooksList)
      let bookCountHTML = ``;
      bookCountHTML += `<span>(` + BooksList.length + ` items)</span>`
      document.getElementById("homepage-book-count").innerHTML = bookCountHTML;
      // let pages = [];
      // pages = BooksList.splice(0,8);
      // console.log(pages);

      for (var i = 0; i < BooksList.length; i++) { 
      
        if ((BooksList[i].bookName.toLowerCase()).includes(searchbooks.toLowerCase())) {         
        
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
              <span class="quantity">
              <span class="rating" >4.5 *</span>
              
              </span>
              <span class="discountprice">
              <span class="cost">Rs.` + BooksList[i].price + ` </span>
             
              </span>
          </div>
          </div>
         
          </div>        
          </div>`
      }
      document.getElementById("main-list").innerHTML = nHTML;     
      }
      
    })

    .catch((err) => {
      console.log(err);
    })
}


if(searchbooks ==''){
  GetBooks();
}

function searchBook() {
  searchbooks = document.getElementById('query').value
  GetBooks(searchbooks);
  
}

$(document).on('click', '.sec', (event) => {
  console.log(event.currentTarget.id)
  let str = `../Pages/singlebook.html?bookName=${event.currentTarget.id}`
  window.location.href = str;
})

function cartpage() {
  window.location.replace('../Pages/cart.html');
}