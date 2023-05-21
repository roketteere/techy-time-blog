document.getElementById("editform").addEventListener("submit",  (event) =>{
  event.preventDefault(); 

  const formData = new FormData(this);

  // Perform PUT request using fetch
  fetch("/api/create", {
    method: "PUT",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // PUT request succeeded
        console.log("PUT request successful");
      } else {
        // Error handling for failed PUT request
        console.error("PUT request failed");
      }
    })
    .catch((error) => {
      // Error handling for network errors
      console.error("Error:", error);
    });
});
