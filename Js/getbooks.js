window.addEventListener('DOMContentLoaded', (event) => {
  GetBooks();
});
const Baseurl2 = "https://new-bookstore-backend.herokuapp.com/";
let BooksList = [];
var images = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
var path = "../Assests/";

function GetBooks() {

  makePromiseCall("GET", `${Baseurl2}bookstore_user/get/book`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).result);
      var nHTML = '';
      BooksList = JSON.parse(res).result;
      // let pages = [];
      // pages = BooksList.splice(0,8);
      // console.log(pages);

      for (var i = 0; i < BooksList.length; i++) {
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

$(document).on('click','.sec', (event) =>{
  console.log(event.currentTarget.id)
   let str = `../Pages/singlebook.html?bookName=${event.currentTarget.id}`
   window.location.href= str;
})
// function openbook(bookName){
//   console.log(bookName)
//  // console.log("hi",BooksList[i],i)
//   let str = `../Pages/singlebook.html?bookName=${bookName}`
  
//   window.location.href= str;
// }


// var images1 = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
// var path1 = "../Assests/";

// function openbook(i ) {
//  //window.location.href="../Pages/singlebook.html";
// console.log("akhila",i )
// let str = `../Pages/singlebook.html?i=${i}`
//   window.location.href= str;
    
//    // console.log("hai")
//     let BookDetailList = BooksList;
//     console.log(BookDetailList)    
//     console.log(BookDetailList[i])
//     let openbookHTML = '';
     
//      openbookHTML += `
//     <div class="main-section1">
//     <div class="sub-section1">
//         <div class="sec1">
//     <div class="books1">
//         <img class="img1" src = "`+ path1 + images1[i] + `" alt="" >
//         </div>
//         <div class="book-text1">
//         <h1 class="main-text1">`+ BookDetailList[i].bookName +`</h1>
//         <h class="sub-text1">`+ BookDetailList[i].author +`</h>
//         <div class="rating1">4.5 * </div>
//         <div class="cost1">RS.` + BookDetailList[i].price + `<hr></div>
//         <div class="description">Bookdetails:<br> ` + BookDetailList[i].description + ` <hr></div>
//     </div>
//     </div>
//     <div class="button">
//     <button class="Addtobag">ADD TO BAG</button>
//     <button class="Whishlist">WHISHLIST</button>
//     </div>
//     </div>
//   </div>`;
//    document.getElementById("list").innerHTML = openbookHTML;
//     console.log(document.getElementById("list"))
  
//   }
//   openbook()




// $(document).on("click",".sec",(event) => {
//  console.log(event.currentTarget.id)
// })


//function openbook1(event){
  //console.log("hi",event.target.id)
  //console.log($)
  //let str = `../Pages/singlebook.html?id=${id}`
 // window.location.href= str;
//}




