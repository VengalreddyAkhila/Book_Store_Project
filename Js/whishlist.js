let wishlistItemList = [];
let imageList1 =["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
let path1 = "../Assests/";
window.addEventListener('DOMContentLoaded', (event) => {
    getWishlistItems();
    getCartItemsInplaceOrder();
});

// method to get wishlist items

function getWishlistItems() {
 
    getService("/bookstore_user/get_wishlist_items", headerconfig)
    .then(res=> {
        console.log(res.data.result);
        console.log(res.data.result.length);
        let wishlistItemsHTML=``;
        wishlistItemList = res.data.result;
        let wishlistCountHTML=``;
        wishlistCountHTML += `<span>` + res.data.result.length + `)</span>` 
        
                       
        document.getElementById("whishlist-book-count").innerHTML = wishlistCountHTML; 
        for(let i=0; i<res.data.result.length; i++) {
            console.log(res.data.result[0]._id);
            wishlistItemsHTML += `<div class="wishlist-item-section">`+
                                    
                                        `<div class="cart-image-item">`+
                                            `<img src="`+ path1 + imageList1[i] + `">`+
                                        `</div>` +  
                                        `<div class="cart-item-title" style="font-size:20px;">`+ res.data.result[i].product_id.bookName +`
                                            <li style="list-style: none" class="title2">`+ res.data.result[i].product_id.author +`</li>
                                            <li style="list-style: none" class="title4">`+ res.data.result[i].product_id.price +`</li>` +
                                        `</div>`+ 
                                        `<div class="wishlistToCart">` +
                                            `<button class="wishlistToCart-button" id=`+ i +` onclick="getWishlistInCart(id);getCartItemsInplaceOrder();removeBookFromWishlist(id);">Add to cart</button>` +
                                        `</div>` +
                                        `<div class="wishlist-delete-button-container">`+
                                            `<button class="wishlist-delete-button"><i class="fa fa-trash-o" id=`+ i +` onclick="removeBookFromWishlist(id)" aria-hidden="true"></i></button>`+
                                        `</div>`+    
                                                       
                                `</div>`
        }
        document.getElementById("wishlist-item-description").innerHTML = wishlistItemsHTML;       
               
    })    
}



function removeBookFromWishlist(i) {
    let Remove = wishlistItemList[i];
  
    let data = {
        "cartItem_id": Remove._id
    }
    
    deleteService("/bookstore_user/remove_wishlist_item/"+Remove.product_id._id+"", data, headerconfig)
    .then(res=> {
        getWishlistItems(); 
        getCartItemsInplaceOrder(); 
    })
}


function getCartItemsInplaceOrder() {
   
    getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res=> {
        console.log(res.data.result);
        console.log(res.data.result.length);
        let itemCountHTML=``;
        itemCountHTML += `<div class="cart-item-count">`+ res.data.result.length +
        
                         `</div>`                         
        document.getElementById("cart-count").innerHTML = itemCountHTML;
        getCartItemsInplaceOrder();
    })
    
} 
function getWishlistInCart(i) {
    let selecteBook = wishlistItemList[i];
    let data = {
        "product_id": selecteBook._id
    }
    
    postService("/bookstore_user/add_cart_item/"+ selecteBook.product_id._id +"", data, headerconfig)
        .then(res=> {
            console.log(res);                           
        })  
        .catch((err) => {
            console.log(err);
        }); 
}


function cartpage() {
    window.location.replace('../Pages/cart.html');
  }


