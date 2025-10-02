// Get the modal and its elements
var popup = document.getElementById('popup');
var closeBtn = document.getElementById('close-btn');
var popupImg = document.querySelector('#popup img'); // Adjust if needed

// When the page loads, show the popup
window.onload = function () {
    if (!popup || !popupImg) return;

    // Show the popup
    popup.style.display = "block";

    // Wait for the image to load
    if (popupImg.complete) {
        handleImageSize();
    } else {
        popupImg.onload = handleImageSize;
    }
};

// Function to adjust image size class if needed
function handleImageSize() {
    const viewportHeight = window.innerHeight;
    if (popupImg.naturalHeight > viewportHeight * 0.9) {
        popupImg.classList.add('tall');
    } else {
        popupImg.classList.remove('tall');
    }
}

// Close popup when clicking the close button
if (closeBtn) {
    closeBtn.onclick = function () {
        popup.style.display = "none";
    };
}

// Optional: Close when clicking outside the image area
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
