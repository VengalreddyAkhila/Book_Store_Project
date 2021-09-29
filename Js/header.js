document.getElementById("header-content").innerHTML = `
<div class="header-section">
<div class="book-img">
    <img class="bookimg" src="../Assests/bookimg.png" alt="">
    <h1 class="bookstore">Bookstore</h1>
</div>
<input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content"> 
<div class="nav-button"  >
 <div class="dropdown">
   <button class="dropbtn"><i class="fa fa-user-o" ></i>
   <h class="user" >user<h>    
   </button>
     
   <div class="dropdown-content">
     <a href="#">My Profile</a>
     <a href="../Pages/orderspage.html">My Orders</a>
     <a href="../Pages/whishlist.html">My Whishlist</a>
     <a href="../Pages/login.html">Logout</a>
   </div>
 </div>   
 
<span class="cart-section"   >
    <img class="cart"  src="../Assests/cart.png" alt="" onclick="cartpage()">
    <h style="font-size:20px">cart</h>
      </span>
      <span class="cart-count" id="cart-count"></span>
      </div>
</div>

`