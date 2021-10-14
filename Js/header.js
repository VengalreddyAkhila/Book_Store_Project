document.getElementById("header-content").innerHTML = `
<div class="header-section">
<div class="book-img">
    <img class="bookimg" src="../Assests/bookimg.png" alt="">
    <h1 class="bookstore">Bookstore</h1>
</div>
<input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content" oninput="searchBook()"> 
<div class="nav-button"  >
 <div class="dropdown">
 <div class="text-user">
   <button class="dropbtn"><i class="fa fa-user-o" ></i>   
   </button>
   <h class="user" >user<h>    
   </div>
     
   <div class="dropdown-content">
     <a href="../Pages/homepage.html">Homepage</a>
     <a href="../Pages/orderspage.html">My Orders</a>
     <a href="../Pages/whishlist.html">My Whishlist</a>
     <span class="logout" onclick="logout()">Logout</a>
   </div>
 </div>   
 
<span class="cart-section"   >
    <img class="cart"  src="../Assests/cart.png" alt="" onclick="cartpage()">
    <h >cart</h>
      </span>
      <span class="cart-count" id="cart-count"></span>
      </div>
</div>

`

function logout(){
  let account = localStorage.clear();
  window.location.replace("../Pages/login.html");
  console.log(account)
}