const signup = document
  .getElementById("sign-up")
  .addEventListener("submit", (e) => {
    e.preventDefault();
  });

const cancelPost = document
  .getElementById("cancel-post")
  .addEventListener("click", (e) => {
    e.target;
    window.location.replace("/dashboard");
  });
