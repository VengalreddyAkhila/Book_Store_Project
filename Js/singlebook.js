
  let imagesList = ["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
  let path1 = "../Assests/";
  let cartItems = [];
  const Baseurl = "https://new-bookstore-backend.herokuapp.com/";

window.addEventListener('DOMContentLoaded', (event) => {

  console.log(path1)
  console.log(imagesList)
  makePromiseCall("GET",`${Baseurl}bookstore_user/get/book`,true,{},true)
  //getService("​/bookstore_user/get/book", headerconfig)
    .then(res => {
      console.log(res.data.result);
      console.log(res.data.result.length);

      BooksList = res.data.result;
     
     
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      console.log(params)


      let singlebook = BooksList.find(
        (book) => book.bookName === params.bookName
      );
      console.log(singlebook)

      //console.log(book)

      let tempHTML = '';
     
     
      tempHTML += `
     <div class="main-section1">
       
             <div class="sec1">
                 <div class="books1">
                 <div class="book1-img1">
                       <img class="img1" src = "../Assests/book4.png" alt="" >
                       </div>
                        <div class="button" id="button">
                              <button class="Addtobag" id="${singlebook._id} " >ADD TO BAG</button>
                              <button class="Whishlist" id="${singlebook._id}" >&#9825; WHISHLIST</button>
                        </div>  
                        <div class="subsection3">

          <span class="minus-count" id="${singlebook._id}" >-</span>
          <span class="quantity-section">
              <span class="count">`+ singlebook.quantity + `</span>
          </span>    
          <span class="add-count-section">
              <span class="add-count" id="${singlebook._id}" >+</span>
          </span>        

  </div>                        </div>  
                      
                  <div class="book-text1" >
                       <h1 class="main-text1">`+ singlebook.bookName + `</h1>
                        <h class="sub-text1">`+ singlebook.author + `</h>
                        <span class="quantity">
                        <span class="rating1" >4.5 *</span>
                        <span class="quan"> (` + singlebook.quantity +`)</span>
                        </span>
                        <span class="discountprice">
                        <span class="cost1">Rs.` + singlebook.price + ` </span>
                        <s class="dp">Rs.` + singlebook.discountPrice + `</s>
                        </span>
                        <div class="description"><h3>Bookdetails:</h3> ` + singlebook.description + `Good Product Even though the translation could have been better .Chnakya's neeti are thought  provoking.Chankyas had written many different topics and his writtings were excellent.<hr> </div>
                        <div class="feedback" ><h2>Customer Feedback:</h2></div>
                        <div class="feedback-box">
                        <div class="overallrating"><h>overall rating</h></div>
                        <div class="checked-star">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        </div>
                        <label for="email"></label>
                        <input class ="review-box " type="email" id="email" name="review" placeholder="write your review">
                        <button class="submit-btn">Submit</button>
                        </div>
                        <div class="review1">
                        <div class="text">
                        <div class = "review-text">AC</div>
                       <h>Aniket Chile</h></div>
                        <div class="star" >
                        <span class="fa fa-star checked" ></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span>☆</span>
                        <span>☆</span>
                        </div>
                        <p class="para">Good Product Even though the translation could have been better .Chnakya's neeti are thought  provoking.Chankyas had written many different topics and his writtings were excellent. </p>
                  </div>
                  <div class="review1">
                  <div class="text">
                  <div class = "review-text">SB</div>
                 <h>Swetha Bodkar</h></div>
                  <div class="star" >
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span>☆</span>
                  <span>☆</span>
                  </div>
                  <p class="para">Good Product Even though the translation could have been better .Chnakya's neeti are thought  provoking.Chankyas had written many different topics and his writtings were excellent. </p>
            </div>
             </div>     
   
  </div>`;
      
      console.log(singlebook.quantity)
      document.getElementById("list").innerHTML = tempHTML;

    })
    .catch((err) => {
      console.log(err);
    })
});

function cartpage() {
  window.location.replace('../Pages/cart.html');
}


$(document).on('click', '.Addtobag', (event) => {
  console.log(event.currentTarget.id)
  let data = {
    "product_id": event.currentTarget.id
  }
  makePromiseCall("POST",`${Baseurl}bookstore_user/add_cart_item/${event.currentTarget.id}`,true,data,true)
  //postService(`/bookstore_user/add_cart_item/${event.currentTarget.id}`, data, headerconfig)
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
  makePromiseCall("POST",`${Baseurl}bookstore_user/add_wish_list/${event.currentTarget.id}`,true,data,true)
 // postService(`/bookstore_user/add_wish_list/${event.currentTarget.id}`, data, headerconfig)
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    //console.log(product_id)

})

$(document).on('click', '.Addtobag', (event) => {
  makePromiseCall("GET",`${Baseurl}bookstore_user/get_cart_items`,true,{},true)
  //getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res => {
      console.log(res.data.result);
      console.log(res.data.result.length);
     
      let cartCountHTML = ``;
      cartCountHTML += `<div class="cart-item-count">` + res.data.result.length + `</div>`
    
      document.getElementById("cart-count").innerHTML = cartCountHTML;  
      //document.getElementById("${singlebook._id}").style.display = 'none';  
      
     
    })
    .catch((err) => {
      console.log(err);
    })

})


function continueshopping() {
  window.location.replace('../Pages/homepage.html');
}

$(document).on('click', '.add-count', (event) => {
  console.log(event.currentTarget.id)


    let data = {
        "quantityToBuy": event.currentTarget.quantity + 1
    }
    makePromiseCall("PUT",`${Baseurl}bookstore_user/cart_item_quantity/${event.currentTarget.id}`,true,data,true)
    //putService("/bookstore_user/cart_item_quantity/"+event.currentTarget.id +"", data, headerconfig)
    .then(res=> {
        console.log(res);     
   
    })
})


$(document).on('click', '.minus-count', (event) => {
  console.log(event.currentTarget.id)
 
    let data = {
        "quantityToBuy": event.currentTarget.quantity - 1
    }
    makePromiseCall("PUT",`${Baseurl}bookstore_user/cart_item_quantity/${event.currentTarget.id}`,true,data,true)
    //putService("/bookstore_user/cart_item_quantity/"+event.currentTarget.id+"", data, headerconfig)
    .then(res=> {       
       console.log(res);

    })
})

