window.addEventListener('DOMContentLoaded', (event) => {
    GetBooks();
  });
  const Baseurl2 =  "https://new-bookstore-backend.herokuapp.com/";
  let BooksList = [];
  function GetBooks() {
   
    makePromiseCall("GET", `${Baseurl2}bookstore_user/get/book`, true, {}, true)
      .then(res => {
        console.log(JSON.parse(res).result);
        var nHTML = '';
        BooksList = JSON.parse(res).result;        
        //document.getElementById("main-list").innerHTML = nHTML;
        for (var i = 0; i < BooksList.length; i++) {
          nHTML += `<div class="main-section">
          <div class="sub-section">
              <div class="sec">
          <div class="books">
              <img class="img" src = "../Assests/book2.png" alt="" >
              </div>
              <div class="book-text">
              <h1 class="main-text">Don't Make Me Think</h1>
              <h class="sub-text">by steve krug</h>
              <button class="rating">4.5</button>
              <div class="cost">RS.1500</div>
          </div>
          </div>
          </div>
          </div>`
        }
       // console.log(nHTML)
        document.getElementById("main-list").innerHTML = nHTML;
        }) 
        //console.log(nHTML)
        .catch((err) => {
          console.log(err);
        })
    }