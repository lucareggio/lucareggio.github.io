document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  var closeBtn = document.getElementById('close-btn');
  var popupImg = document.querySelector('#popup img');

  if (!popup || !popupImg) return;

  // Show the popup
  popup.style.display = 'flex';  // since .popup uses flex layout

  // After image loads, adjust if needed
  function onImgLoad() {
    adjustImageMode();
  }

  if (popupImg.complete) {
    // If already loaded (from cache), directly adjust
    adjustImageMode();
  } else {
    popupImg.addEventListener('load', onImgLoad);
  }

  // Close on close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }

  // Close when clicking outside content
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  // On window resize, re-check image mode
  window.addEventListener('resize', adjustImageMode);

  function adjustImageMode() {
    // Remove previous class
    popupImg.classList.remove('tall');

    var viewportH = window.innerHeight - 40; // subtracted padding (20px top + 20px bottom)
    var viewportW = window.innerWidth - 40;

    // Natural dimensions
    var naturalW = popupImg.naturalWidth;
    var naturalH = popupImg.naturalHeight;

    if (!naturalW || !naturalH) {
      // can't detect, default behavior
      return;
    }

    // If the image’s height is relatively large compared to viewport,
    // prefer height-based scaling
    if (naturalH / naturalW > viewportH / viewportW) {
      // the image is “taller” in ratio than viewport, so scale by height
      popupImg.classList.add('tall');
    } else {
      // else keep default (scale by width)
      popupImg.classList.remove('tall');
    }
  }
});
