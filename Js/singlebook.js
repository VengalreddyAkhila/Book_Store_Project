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
    
    console.log(BooksList)   

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)
    
    
   let singlebook = BooksList.find(
     (book) => book.bookName 
     
   );
   console.log(singlebook)

    let tempHTML = '';

     
     tempHTML += `
     <div class="main-section1">
         <div class="sub-section1">
             <div class="sec1">
         <div class="books1">
             <img class="img1" src = "../Assests/book11.png" alt="" >
             </div>
             <div class="book-text1" style="width:1000px">
             <h1 class="main-text1">`+ singlebook.bookName +`</h1>
             <h class="sub-text1">`+ singlebook.author +`</h>
             <div class="rating1">4.5 * </div>
             <div class="cost1">RS.` + singlebook.price + `<hr></div>
             <div class="description">Bookdetails:<br> ` + singlebook.description + ` </div>
         </div>
         </div>
    <div class="button">
    <button class="Addtobag">ADD TO BAG</button>
    <button class="Whishlist">WHISHLIST</button>
    </div>
    </div>
  </div>`;
    
   document.getElementById("list").innerHTML = tempHTML;
    console.log(document.getElementById("list"))
    
  
  })
  .catch((err) => {
    console.log(err);
  })
});