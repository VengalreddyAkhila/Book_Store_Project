window.addEventListener('DOMContentLoaded', (event) => {
let images1 = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
let path1 = "../Assests/";



 //window.location.href="../Pages/singlebook.html";
//console.log("akhila",i )
// let str = `../Pages/singlebook.html?i=${i}`
//   window.location.href= str;
    
   // console.log("hai")
   const Baseurl0 = "https://new-bookstore-backend.herokuapp.com/";
   makePromiseCall("GET", `${Baseurl0}bookstore_user/get/book`, true, {}, true)
   .then(res => {
     console.log(JSON.parse(res).result);
    
     BooksList = JSON.parse(res).result;

    let BookDetailList = BooksList;
    console.log(BookDetailList)   
    let singlebook = BookDetailList.filter(
        (BookDetailList) => (BookDetailList.bookName&BookDetailList.author&BookDetailList.price&BookDetailList.description)
    );
  console.log(singlebook)
    let tempHTML = '';
    for (var i = 0; i < BooksList.length; i++) {
    console.log(BookDetailList[i])
   
     
     tempHTML += `
     <div class="main-section1">
         <div class="sub-section1">
             <div class="sec1">
         <div class="books1">
             <img class="img1" src = "`+ path1 + images1[i] + `" alt="" >
             </div>
             <div class="book-text1">
             <h1 class="main-text1">`+ BookDetailList[i].bookName +`</h1>
             <h class="sub-text1">`+ BookDetailList[i].author +`</h>
             <div class="rating1">4.5 * </div>
             <div class="cost1">RS.` + BookDetailList[i].price + `</div>
             <div class="description">Bookdetails:<br> ` + BookDetailList[i].description + ` </div>
         </div>
         </div>
    <div class="button">
    <button class="Addtobag">ADD TO BAG</button>
    <button class="Whishlist">WHISHLIST</button>
    </div>
    </div>
  </div>`;
    }
   document.getElementById("list").innerHTML = tempHTML;
    console.log(document.getElementById("list"))
    
  
  })
  .catch((err) => {
    console.log(err);
  })
});