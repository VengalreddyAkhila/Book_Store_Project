window.addEventListener('DOMContentLoaded',(event) => {         
      // password validation
      var pwd = document.getElementById("password");
      var pwdError = document.getElementById("password_error");
      const form3 = document.getElementById("form");
    //   form3.addEventListener("submit", (e) => {
    //       let messages = []
    //       if(pwd.value === '' || pwd.value == null){
    //           messages.push('password is required');
    //       }
    //       if(messages.length > 0){
    //           e.preventDefault()
    //           pwdError.innerText = messages.join(',');
    //       }
    //   });
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
      // const form2 = document.getElementById("form");
       let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]+@[A-Za-z]+[.][A-Za-z]{2,3}(.[a-zA-Z]{2,3}){0,1}$");
    //    form2.addEventListener("submit", (e) => {
    //        let messages = []
    //        if(email.value === '' || email.value == null){
    //            messages.push('email is required');
    //        }
    //        if(messages.length > 0){
    //            e.preventDefault()
    //            emailError.innerText = messages.join(',');
    //        }
    //    });
       email.addEventListener("input", function () {
          
           if (emailRegex.test(email.value)) {
               emailError.textContent = "";
   
           } else {
               emailError.textContent = "InvalidEmail";   
           }
       }); 
    });

    const Baseurl1 =  "https://new-bookstore-backend.herokuapp.com/";
    function login () {
       
         let data={                   
             "email" : email.value,       
             "password" :password.value             
         }     
         console.log("data",data);
         postService("/bookstore_user/login", data, headerconfig)
         .then(res=> {
             console.log(res.data);                    
                 localStorage.setItem("token", res.data.result.accessToken);
          //  window.location.href="../Pages/homepage.html"; 
            // localStorage.setItem("Accesstoken",JSON.parse(res).result.accessToken);
             //localStorage.getItem("x-access-token",JSON.parse(res).result.accessToken);
             
         })
         .catch()
         console.log("error");
     }