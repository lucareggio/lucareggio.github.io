document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');
  const popupImg = document.querySelector('#popup img');

  if (!popup || !popupImg) return;

  // Show popup
  popup.style.display = 'flex';

  // Adjust image layout
  function adjustImageMode() {
    popupImg.classList.remove('tall');

    const vw = window.innerWidth - 40;
    const vh = window.innerHeight - 40;

    const imgRatio = popupImg.naturalHeight / popupImg.naturalWidth;
    const viewportRatio = vh / vw;

    if (imgRatio > viewportRatio) {
      popupImg.classList.add('tall');
    }
  }

  // Centering fallback for very tall content
  function enforceVerticalOffset() {
    const content = document.querySelector('#popup .popup-content');
    const popupBox = popup.getBoundingClientRect();
    const contentBox = content.getBoundingClientRect();

    if (contentBox.height < popupBox.height) {
      content.style.marginTop = ((popupBox.height - contentBox.height) / 2) + 'px';
    } else {
      content.style.marginTop = '20px';
    }
  }

  function finalizeLayout() {
    adjustImageMode();
    enforceVerticalOffset();
  }

  if (popupImg.complete) {
    finalizeLayout();
  } else {
    popupImg.onload = finalizeLayout;
  }

  window.addEventListener('resize', finalizeLayout);

  // Close popup
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close on outside click
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
