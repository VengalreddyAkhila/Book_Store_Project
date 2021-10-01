
window.addEventListener('DOMContentLoaded', (event) => {   
    getCartItemsInOrderPage();
});
let imageList1 =["book1.png", "book2.png", "book3.png", "book4.png", "book5.png", "book12.png", "book1.png", "book8.png", "book9.png", "book10.png", "book1.png", "book12.png", "book2.png", "book9.png", "book6.png", "book11.png"];
let path1 = "../Assests/";
let OrderItemList = []
    function getCartItemsInOrderPage() {
       
        getService("​/bookstore_user/get_cart_items", headerconfig)
    .then(res=> {
        console.log(res.data.result);
        console.log(res.data.result.length);
        OrderItemList = res.data.result;    
      
        let itemCountHTML=``;
        itemCountHTML += `<span class="cart-item-count">` +OrderItemList.length +`) </span>`
        document.getElementById("cart-count").innerHTML = itemCountHTML;

        let OrdersCountHTML=``;
        OrdersCountHTML += `<span>` + res.data.result.length + `)</span>`        
         document.getElementById("orders-book-count").innerHTML = OrdersCountHTML; 

        let orderItemsHTML=``;
        for(let i=0; i<res.data.result.length; i++) {
            console.log(res.data.result[0]._id);
            orderItemsHTML += `<div class="wishlist-item-section">`+
                                    
                                        `<div class="cart-image-item">`+
                                            `<img src="`+ path1 + imageList1[i] + `">`+
                                        `</div>` +  
                                        `<div class="cart-item-title" style="font-size:20px;">`+ res.data.result[i].product_id.bookName +`
                                            <li style="list-style: none" class="title2">`+ res.data.result[i].product_id.author +`</li>
                                            <li style="list-style: none" class="title4">`+ res.data.result[i].product_id.price +`</li>` +
                                        `</div>`+ 
                                         
                                                       
                                `</div>`
        }
        document.getElementById("order-page").innerHTML = orderItemsHTML;     
       
               
    })    
}

function cartpage() {
    window.location.replace('../Pages/cart.html');
  }