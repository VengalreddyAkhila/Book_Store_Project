       
    // name validation
    function validateName() {
        const name = document.getElementById('fullname');
    
        const nameError = document.getElementById('fullname_error');  
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');  
    
        if(nameRegex.test(name.value)) 
              nameError.textContent = "";
        else nameError.textContent = "Enter your full name";        
    }

  // phone number validation

function validatePhone() {
    const phone = document.getElementById('mobilenumber');
    const phnError = document.getElementById('number_error');
    let numRegex = RegExp('^([([0-9]{9,10})$');
    if (numRegex.test(phone.value))
        phnError.textContent = "";
    else phnError.textContent = "Enter your phone number";
}

//password validation

    function validatePwd() {
        const pwd = document.getElementById('password');
    
        const pwdError = document.getElementById('password_error');  
       let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
        if(passwordRegex.test(pwd.value)) 
              pwdError.textContent = "";
        else 
        pwdError.textContent = "Enter your password";        
    }
    // Email validation

    function validateEmail() {
        const email = document.getElementById('email');
    
        const emailError = document.getElementById('email_error');  
        let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]+@[A-Za-z]+[.][A-Za-z]{2,3}(.[a-zA-Z]{2,3}){0,1}$");
    
        if(emailRegex.test(email.value)) 
              emailError.textContent = "";
        else emailError.textContent = "Enter your email";        
    }    

  
const Baseurl =  "https://new-bookstore-backend.herokuapp.com/";
    function signup () {
      
          validateName();
          validateEmail();
          validatePhone();
          validatePwd();
       
         let data={
             "fullName" : fullname.value,             
             "email" : email.value,       
             "password" : password.value,
             "phone" : mobilenumber.value
         }   
         console.log("data",data);
         makePromiseCall("POST",`${Baseurl}bookstore_user/registration`,true,data)
         .then((res) => {
             console.log(res);  
           
             //window.location.href="../Pages/login.html"; 
             
         })
         .catch()
         console.log("error");
     }