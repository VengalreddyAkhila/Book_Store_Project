
window.addEventListener('DOMContentLoaded', (event) => {
    getCartItems();
    getCartItemsInOrderSection();
});

let cartItems = []
function getCartItems() {

getService("​/bookstore_user/get_cart_items", headerconfig)
.then(res=> {
    console.log(res.data.result);
    console.log(res.data.result.length);
        let cartItemsHTML=``;
        cartItems = res.data.result;
        let itemCountHTML=``;
        itemCountHTML += `<span class="cart-item-count">` +cartItems.length +` )</span>`
        for(let i=0; i<cartItems.length; i++) {
            console.log(cartItems[0]._id);
            cartItemsHTML +=    `<div class="cart-item-section">`+
                                `<div class="image-and-description">`+
                                    `<div class="cart-image-item">`+
                                        `<img src="../Assests/book9.png">`+
                                    `</div>` +  
                                    `<div class="cart-item-title">`+ cartItems[i].product_id.bookName +`
                                        <li style="list-style: none" class="title2">`+ cartItems[i].product_id.author +`</li>
                                        <li style="list-style: none" class="title4">Rs. `+ cartItems[i].product_id.price +`</li>
                                        
                                    ` +
                                    `</div>`+ 
                                `</div>`+

                                `<div class="subsection3">`+

                                    `<span class="minus-count" id=`+ i  +` onclick="decreaseCartItem(id)">-</span>`+
                                    `<span class="quantity-section">`+
                                        `<span class="count">`+cartItems[i].quantityToBuy+`</span>`+
                                    `</span>`+    
                                    `<span class="add-count-section">`+
                                        `<span class="add-count" id=`+ i  +` onclick="increaseCartItem(id)">+</span>`+
                                    `</span>`+
                                    `<span class="remove-section" id=`+ i  +` onclick="removeBookFromCart(id)">Remove</span> `   +
                                ` </div> `+


                            `</div>`
        }
        document.getElementById("place-order-section-cart-description").innerHTML = cartItemsHTML;        
        document.getElementById("nav-section-cart-icon").innerHTML = itemCountHTML;
        document.getElementById("place-order-section-cart-count").innerHTML = itemCountHTML;
        document.getElementById("nav-section-cart-icon").innerHTML = itemCountHTML;
        document.getElementById("nav-section-cart-icon").innerHTML = itemCountHTML;           
    })    
}

function addCustomerDetails() {
    validateName();
    validatePhone();    
    validateAddress();
    validateTown();
    validateState();
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let data = {
        "addressType": "Home" ,
        "fullAddress": address.value,
        "city": city.value,
        "state": state.value
    };  

    putService("/bookstore_user/edit_user",data, headerconfig)
    .then(res=> {
        console.log(res.data.result);
        })
        .catch((err) => {
            console.log(err);
        })

}
function addOrder() {
    let itemsList = [];
    for(let i=0; i<cartItems.length; i++) {
        tempDict = {
            'product_id': cartItems[i].product_id._id,
            'product_name': cartItems[i].product_id.bookName,
            'product_quantity': cartItems[i].quantityToBuy,
            'product_price': cartItems[i].product_id.price,
        }
        itemsList.push(tempDict);
    }    
    let data = {
        "orders": itemsList
    }

    postService("/bookstore_user/add/order", data, headerconfig)
    .then(res=> {
        console.log(res.data.result);
        window.location.replace('../Pages/ordersucessful.html')
    })
}
function getCartItemsInOrderSection() {
    getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res=> {
        console.log(res.data.result);
      cartItems = res.data.result;
      let cartItemsHTML=``;
        for(let i=0; i<cartItems.length; i++) {
            console.log(cartItems[0]._id);
            cartItemsHTML +=    `<div class="order-summery-cart-item-section">`+
                                `<div class="image-and-description">`+
                                    `<div class="cart-image-item">`+
                                        `<img src="../Assests/book11.png">`+
                                    `</div>` +  
                                    `<div class="cart-item-title">`+ cartItems[i].product_id.bookName +`
                                        <li style="list-style: none" class="title2">`+ cartItems[i].product_id.author +`</li>
                                        <li style="list-style: none" class="title4">Rs. `+ cartItems[i].product_id.price +`</li>
                                        
                                    ` +
                                    `</div>`+ 
                                `</div>`+                   
                            `</div>`
        }
        document.getElementById("order-summery-section-order-description").innerHTML = cartItemsHTML;                 
    })    
}

function removeBookFromCart(i) {
    let BooksRemove = cartItems[i];   
    let data = {
        "cartItem_id": BooksRemove._id
    }

    deleteService("/bookstore_user/remove_cart_item/"+ BooksRemove._id+"", data, headerconfig)
    .then(res=> {
              getCartItems();
    })
}

function increaseCartItems(i) {
    let IncreaseCount = cartItems[i];

    let data = {
        "quantityToBuy": IncreaseCount.quantityToBuy + 1
    }
    
    putService("/bookstore_user/cart_item_quantity/"+IncreaseCount._id +"", data, headerconfig)
    .then(res=> {
        console.log(res);
        getCartItems();
    })
}


function decreaseCartItems(i) {
    let DecreaseCount = cartItems[i];  
    let data = {
        "quantityToBuy": DecreaseCount.quantityToBuy - 1
    }
    
    putService("/bookstore_user/cart_item_quantity/"+DecreaseCount._id +"", data, headerconfig)
    .then(res=> {       
        getCartItems();
    })
}
// name validation    

function validateName() {
    const name = document.getElementById('first-name');

    const nameError = document.getElementById('name-error');  
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');  

    if(nameRegex.test(name.value)) 
          nameError.textContent = "";
    else nameError.textContent = "Enter your full name";        
}

// phone number validation

function validatePhone() {
    const phone = document.getElementById('phone-number');
    const phnError = document.getElementById('phone-error');
    let pwdRegex = RegExp('^([([0-9]{9,10})$');
    if (pwdRegex.test(phone.value))
        phnError.textContent = "";
    else phnError.textContent = "Enter your phone number";
}


// address validation    

function validateAddress() {
    const address = document.getElementById('address');
    const addressError = document.getElementById('address-error');    

    if(address.value == "") addressError.textContent = "Enter your address";        
}

// city/town validation    

function validateTown() {
    const town = document.getElementById('state');
    const townError = document.getElementById('state-error');    

    if(town.value == "") townError.textContent = "Enter your city or town";        
}

// state validation    

function validateState() {
    const landmark = document.getElementById('state');
    const landmarkError = document.getElementById('landmark-error');    

    if(landmark.value == "") landmarkError.textContent = "Enter your landmark";        
}



function placeorder() {
    if (document.getElementById('place-order-page')) {

        if (document.getElementById('cart_page-section2').style.display == 'none') {
            document.getElementById('cart_page-section2').style.display = 'block';
            document.getElementById('customer-details-page').style.display = 'none';
        }
        else {
            document.getElementById('cart_page-section2').style.display = 'none';
            document.getElementById('customer-details-page').style.display = 'block';
        }
    }
}

function orderSummery() {
    if (document.getElementById('cart_page-section3')) {

        if (document.getElementById('cart_page-section3').style.display == 'none') {
            document.getElementById('cart_page-section3').style.display = 'block';
            document.getElementById('order-summery-page').style.display = 'none';
        }
        else {
            document.getElementById('cart_page-section3').style.display = 'none';
            document.getElementById('order-summery-page').style.display = 'block';
        }
    }
} 