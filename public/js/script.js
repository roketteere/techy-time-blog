const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const signup = document.getElementById("sign-up");

//
let p1;
let p2;

document.addEventListener("keypress", (e) => {
  p1 === p2 && p1 != undefined
    ? (signup.disabled = false)
    : (signup.disabled = true);
});

password.addEventListener("keypress", (e) => {
  p1 = password.value;
});

cpassword.addEventListener("keypress", (e) => {
  p2 = cpassword.value;
});

signup.addEventListener("click", (e) => {
  e.target;
  location.href
});
