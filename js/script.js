// Show/hide class details
// This script adds click event listeners to all buttons with the class "details-btn". When a button is clicked, it toggles the visibility of the corresponding details box and updates the button text accordingly.
var buttons = document.querySelectorAll(".details-btn");// Select all buttons with the class "details-btn"
buttons.forEach(function (btn) { // For each button, add a click event listener
  btn.addEventListener("click", function () { // When the button is clicked, execute the following function
    var box = btn.nextElementSibling;// Get the next sibling element of the button, which is the details box
    box.classList.toggle("open");// Toggle the "open" class on the details box to show or hide it
    btn.textContent = box.classList.contains("open") ? "Hide class details" : "View class details";// Update the button text based on whether the details box is open or closed
  });// End of click event listener
});// End of forEach loop
