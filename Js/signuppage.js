window.addEventListener('DOMContentLoaded',(event) => {         
    // name validation
    const name = document.getElementById("fullname");       
    const nameError = document.getElementById("fullname_error");
    const form = document.getElementById("form");
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    form.addEventListener("submit", (e) => {
        let messages = []
        if(name.value === '' || name.value == null){
            messages.push('fullname is required');
        }
        if(messages.length > 0){
            e.preventDefault()
            nameError.innerText = messages.join(',');
        }
    });
        name.addEventListener("input", function () {
        if (nameRegex.test(name.value)) {
            nameError.textContent = "";    

        }
        if (!nameRegex.test(name.value)) {
            nameError.textContent = "enter fullname";                 
        }
    });  
     // password validation
     var pwd = document.querySelector("#password");
     var pwdError = document.querySelector("#password_error");
     const form3 = document.getElementById("form");
     form3.addEventListener("submit", (e) => {
         let messages = []
         if(pwd.value === '' || pwd.value == null){
             messages.push('password is required');
         }
         if(messages.length > 0){
             e.preventDefault()
             pwdError.innerText = messages.join(',');
         }
     });
     pwd.addEventListener("input", function () {
         let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
         if (passwordRegex.test(pwd.value)) {
             pwdError.textContent = "";
         }
         if (pwd.value.length < 8) {
             pwdError.textContent = "Password Invalid";
         }
         if (!passwordRegex.test(pwd.value)) {
             pwdError.textContent = "Password Invalid";
         }
     });

       // email validation
       var email = document.getElementById("email");
       var emailError = document.getElementById("email_error");
       const form2 = document.getElementById("form");
       let emailRegex = RegExp("^[A-Za-z0-9]{3,10}@[A-Za-z]{3,10}.(com|co.in|co.uk)$");
       form2.addEventListener("submit", (e) => {
           let messages = []
           if(email.value === '' || email.value == null){
               messages.push('email is required');
           }
           if(messages.length > 0){
               e.preventDefault()
               emailError.innerText = messages.join(',');
           }
       });
       email.addEventListener("input", function () {
          
           if (emailRegex.test(email.value)) {
               emailError.textContent = "";
   
           } else {
               emailError.textContent = "InvalidEmail";   
           }
       }); 
           // phonenumber validation
    const mobilenumber = document.getElementById("mobilenumber");       
    const number_Error = document.getElementById("number_error");
    const form4 = document.getElementById("form");
    let numberRegex = RegExp('^([([0-9]{9,10})$');
    form4.addEventListener("submit", (e) => {
        let messages = []
        if( mobilenumber.value === '' ||  mobilenumber.value == null){
            messages.push('fullname is required');
        }
        if(messages.length > 0){
            e.preventDefault()
            number_Error.innerText = messages.join(',');
        }
    });
    mobilenumber.addEventListener("input", function () {
        if (numberRegex.test( mobilenumber.value)) {
            number_Error.textContent = "";    

        }
        if (!numberRegex.test( mobilenumber.value)) {
            number_Error.textContent = "enter phonenumber";                 
        }
    }); 
});