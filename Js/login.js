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

    const Baseurl1 =  "https://new-bookstore-backend.herokuapp.com/";
    function login () {
       validatePwd();
       validateEmail();
         let data={                   
             "email" : email.value,       
             "password" :password.value             
         }     
         console.log("data",data);
         makePromiseCall("POST",`${Baseurl1}bookstore_user/login`,true,data)
         .then((res) => {
            console.log(JSON.parse(res));                
            localStorage.setItem("Accesstoken",JSON.parse(res).result.accessToken);
            window.location.href="../Pages/homepage.html"; 
           
             
         })
         .catch()
         console.log("error");
     }