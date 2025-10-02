document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');
  const popupImg = document.querySelector('#popup img');

  if (!popup || !popupImg) return;

  // Show popup
  popup.style.display = 'flex';

  // Function to check if image is tall
  function adjustImageMode() {
    popupImg.classList.remove('tall');

    const vw = window.innerWidth - 40; // account for padding
    const vh = window.innerHeight - 40;

    const imgRatio = popupImg.naturalHeight / popupImg.naturalWidth;
    const viewportRatio = vh / vw;

    if (imgRatio > viewportRatio) {
      popupImg.classList.add('tall');
    }
  }

  // Wait for image to load
  if (popupImg.complete) {
    adjustImageMode();
  } else {
    popupImg.onload = adjustImageMode;
  }

  // Adjust again on window resize
  window.addEventListener('resize', adjustImageMode);

  // Close on button click
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }

  // Close when clicking outside the popup content
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
