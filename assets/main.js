const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    alert("Please fill in all fields.");
  } else {
    alert("Form submitted successfully!");
  }
});
