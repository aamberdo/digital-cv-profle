
// Get email form elements
const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email-input");
const personalInfo = document.querySelector("#info-content");
const errorMessage = document.querySelector("#errorMessage");

// Get all View More buttons
const viewButtons = document.querySelectorAll(".view-more");

// Check email format
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show error message
function showErrorMessage(message) {
  errorMessage.textContent = message;
}

// Check email when submitting the form
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const userEmail = emailInput.value.trim();

  if (userEmail === "") {
    showErrorMessage("Please enter your email");
  } else if (!regex.test(userEmail)) {
    showErrorMessage("Invalid email format");
  } else {
    emailForm.classList.add("hide");
    personalInfo.classList.remove("hide");
  }
});

// Clear the error when typing
emailInput.addEventListener("input", function() {
  showErrorMessage("");
});

// Show or hide resume information
viewButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    const content = button.nextElementSibling;
    const card = button.parentElement;

    content.classList.toggle("hide");

    if (content.classList.contains("hide")) {
      button.textContent = "View More";
      card.classList.remove("expanded");
    } else {
      button.textContent = "View Less";
      card.classList.add("expanded");
    }

  });
});

