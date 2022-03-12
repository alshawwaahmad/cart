let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let registerBtn = document.querySelector("#singup");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (username.value === "" || password.value === "" || email.value === "") {
    alert("enter data");
  } else {
    
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 2000);
  }
});

