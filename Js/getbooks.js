window.addEventListener('DOMContentLoaded', (event) => {
    GetNotes();
  });
  let BooksList = [];
  function GetBooks() {
    document.getElementById("main-section").style.display = "block";
    makePromiseCall("GET", `${Baseurl}bookstore_user​/get​/book`, true, {}, true)
      .then(res => {
        console.log(JSON.parse(res).data.result);
        var nHTML = '';
        BooksList = JSON.parse(res).data.result;
        for (var i = 0; i < BooksList.length; i++) {
           var Add_item = "Additem" + BooksList[i]._id;
           var Wishlist = "wishlist" + BooksList[i]._id;
           nHTML += '<div class'
        }
            document.getElementById("main-section").innerHTML = nHTML;
        }) 
        .catch((err) => {
          console.log(err);
        })
    }