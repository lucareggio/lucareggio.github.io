// Get the modal
var popup = document.getElementById('popup');

// Get the button that closes the modal
var closeBtn = document.getElementById('close-btn');

// When the page loads, show the modal
window.onload = function() {
    popup.style.display = "block";
};

// When the user clicks the close button, hide the modal
closeBtn.onclick = function() {
    popup.style.display = "none";
};

// Optional: Close the popup if the user clicks outside the image area
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};
