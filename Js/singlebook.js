let BooksList = [];


window.addEventListener('DOMContentLoaded', (event) => {


  var imagesList = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
  var path1 = "../Assests/";
  console.log(path1)
  console.log(imagesList)


  //window.location.href="../Pages/singlebook.html";
  //console.log("akhila",i )
  // let str = `../Pages/singlebook.html?i=${i}`
  //   window.location.href= str;

  // console.log("hai")

  getService("​/bookstore_user/get/book", headerconfig)
    .then(res => {
      console.log(res.data.result);
      console.log(res.data.result.length);

      BooksList = res.data.result;

      console.log(BooksList)
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      console.log(params)


      let singlebook = BooksList.find(
        (book) => book.bookName === params.bookName
      );
      console.log(singlebook)

      //console.log(book)

      let tempHTML = '';

      let button_section = "button-section" + singlebook._id;
      let cart_section = "add-cart-section" + singlebook._id;
      let wishlist_section = "wishlist-section" + singlebook._id;

      tempHTML += `
     <div class="main-section1">
         <div class="sub-section1">
             <div class="sec1">
         <div class="books1">
             <img class="img1" src = "../Assests/book4.png" alt="" >
             </div>
             <div class="book-text1" style="width:1000px">
             <h1 class="main-text1">`+ singlebook.bookName + `</h1>
             <h class="sub-text1">`+ singlebook.author + `</h>
             <div class="rating1">4.5 * </div>
             <div class="cost1">RS.` + singlebook.price + `<hr></div>
             <div class="description">Bookdetails:<br> ` + singlebook.description + ` </div>
         </div>
         </div>
    <div class="button" id=" `+ button_section + `">
    <button class="Addtobag" id="${singlebook._id}" >ADD TO BAG</button>
    <button class="Whishlist" id="${singlebook._id}">WHISHLIST</button>
    </div>
    <div class="select-buttons">
    <div class="add-cart" id=`+ cart_section + `>
                                        <button class="cart-button">ADDED TO BAG</button>
                                    </div>
                                    <div class="add-wishlist" id=`+ wishlist_section + `>
                                        <button class="wishlist-button">WISHLIST</button>
                                    </div>
                                    </div>
    </div>
  </div>`;

      //console.log(singlebook._id)
      document.getElementById("list").innerHTML = tempHTML;
      console.log(document.getElementById("list"))


    })
    .catch((err) => {
      console.log(err);
    })
});
const Baseurl01 = "https://new-bookstore-backend.herokuapp.com/";
function cartpage() {
  window.location.replace('../Pages/cart.html');
}

$(document).on('click', '.Addtobag', (event) => {
  console.log(event.currentTarget.id)
  let data = {
    "product_id": event.currentTarget.id
  }

  postService(`/bookstore_user/add_cart_item/${event.currentTarget.id}`, data, headerconfig)
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })

})


$(document).on('click', '.Whishlist', (event) => {
  console.log(event.currentTarget.id)

  let data = {
    "product_id": event.currentTarget.id
  }

  postService(`/bookstore_user/add_wish_list/${event.currentTarget.id}`, data, headerconfig)
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  if (document.getElementById('button-section' + event.currentTarget.id)) {
    if (document.getElementById('button-section' + event.currentTarget.id).style.display == 'none') {
      document.getElementById('button-section' + event.currentTarget.id).style.display = 'block';
      document.getElementById('add-cart-section' + event.currentTarget.id).style.display = 'none';
    }
    else {
      document.getElementById('button-section' + event.currentTarget.id).style.display = 'none';
      document.getElementById('add-cart-section' + event.currentTarget.id).style.display = 'block';
    }
  }

})


$(document).on('click', '.Addtobag', (event) => {
  getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res => {
      console.log(res.data.result);
      console.log(res.data.result.length);

      let cartCountHTML = ``;
      cartCountHTML += `<div class="cart-item-count">` + res.data.result.length + `</div>`
      document.getElementById("cart-count").innerHTML = cartCountHTML;
    })
    .catch((err) => {
      console.log(err);
    })

})
