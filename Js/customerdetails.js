


function placeorder() {
    if (document.getElementById('cartpage')) {

        if (document.getElementById('customerdetails').style.display == 'none') {
            document.getElementById('customerdetails').style.display = 'block';
            document.getElementById('customer-form').style.display = 'none';
        }
        else {
            document.getElementById('customerdetails').style.display = 'none';
            document.getElementById('customer-form').style.display = 'block';
        }
    }
}