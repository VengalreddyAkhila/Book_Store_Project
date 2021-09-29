
window.addEventListener('DOMContentLoaded', (event) => {   
    getordereditems();
});
function getordereditems() {
   
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