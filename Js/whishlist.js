let wishlistItemList = [];
const imageList = ["../assets/dashboard/img1.png"
                    ];

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
                                            `<img src="../Assests/book4.png">`+
                                        `</div>` +  
                                        `<div class="cart-item-title" style="font-size:20px;">`+ res.data.result[i].product_id.bookName +`
                                            <li style="list-style: none" class="title2">`+ res.data.result[i].product_id.author +`</li>
                                            <li style="list-style: none" class="title4">`+ res.data.result[i].product_id.price +`</li>` +
                                        `</div>`+ 
                                       
                                        `<div class="wishlist-delete-button-container">`+
                                            `<button class="wishlist-delete-button"><i class="fa fa-trash-o" id=`+ i +` onclick="removeBookFromWishlist(id)" aria-hidden="true"></i></button>`+
                                        `</div>`+    
                                                       
                                `</div>`
        }
        document.getElementById("wishlist-item-description").innerHTML = wishlistItemsHTML;       
        // document.getElementById("whishlist-book-count").innerHTML = wishlistItemCountHTML;           
    })    
}

// ---------------method to remove book from wishlist------------------

function removeBookFromWishlist(i) {
    let selectedBookToRemove = wishlistItemList[i];
  
    let data = {
        "cartItem_id": selectedBookToRemove._id
    }
    
    deleteService("/bookstore_user/remove_wishlist_item/"+selectedBookToRemove.product_id._id+"", data, headerconfig)
    .then(res=> {
        getWishlistItems(); 
        getCartItemsInplaceOrder(); 
    })
}

// ---------method to display cart item count in wishlist page------------

function getCartItemsInplaceOrder() {
   
    getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res=> {
        console.log(res.data.result);
        console.log(res.data.result.length);
        let itemCountHTML=``;
        itemCountHTML += `<div class="cart-item-count-in-dashboard">`+ res.data.result.length +
        
                         `</div>`                         
        document.getElementById("cart-count").innerHTML = itemCountHTML;
        getCartItemsInplaceOrder();
    })
    
} 



function getWishlistInCart(i) {
    let selectedBook = wishlistItemList[i];
   
    let data = {
        "product_id": selectedBook._id
    }
    
    postService("/bookstore_user/add_cart_item/"+ selectedBook.product_id._id +"", data, headerconfig)
        .then(res=> {
            console.log(res);                           
        })  
        .catch((err) => {
            console.log(err);
        }); 
}

