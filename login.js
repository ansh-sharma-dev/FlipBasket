function login(){
    let email =
    document.getElementById("email").value;
    let password =
    document.getElementById("password").value;

      let user = 
      JSON.parse(localStorage.getItem("user"));

      if(!user){
        alert("Please create an account first.");
        return;
      }
      if(email === user.email && password === user.password){
        
          alert("Login Successfull 🎉");

          window.location.href="index-old.html";
      }
      else{
        alert("Invalid Email or Password");
      }
}