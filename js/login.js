let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#singin");

let get_user = localStorage.getItem("username");
let get_password = localStorage.getItem("password");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("enter data");
  } else {
    if (
      get_user &&
      get_user.trim() === username.value.trim() &&
      get_password &&
      get_password === password.value
    ) {
      setTimeout(function(){
window.location="index.html";

      },1500)
    } else {
      alert("error");
    }
  }
});
