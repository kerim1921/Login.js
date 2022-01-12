var user = {
    email:`john.doe@gmail.com` ,
    password: 123456
}
 function login(){
     var email = document.getElementById(`email`).value;
     var email = document.getElementById(`password`).value;
     console.log(email,password);
     if(email=== user.email && password === user.password){
         var loginForm = document.getElementById(`login-form`);
         loginForm.style.display = `none`;
         var nav = document.querySelector(`nav`);
         nav.style.display = `block`;
     }else{
         var errorMsg = document.querySelector(`#login-form .font-22`);
         errorMsg.style.display = `block`;
     }
 }

 function logout(){
     var loginForm = document.getElementById(`login-form`);
     loginForm.style.display = `block`;
     var nav = document.querySeceltor(`.nav`);
     nav.style.display = `none`;
 }