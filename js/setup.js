'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && setupUserName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closePopup();
    }
  });
})();
