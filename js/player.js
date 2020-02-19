'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
  var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
  var inputFireballColor = wizardFireball.querySelector('input[name = "fireball-color"]');


  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.date.COAT_COLORS[window.random(0, window.date.COAT_COLORS.length)];
    inputCoatColor.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.date.EYES_COLORS[window.random(0, window.date.EYES_COLORS.length)];
    inputEyesColor.value = wizardEyes.style.fill;
  });

  wizardFireball.addEventListener('click', function () {
    inputFireballColor.value = window.date.FIREBALL_COLORS[window.random(0, window.date.FIREBALL_COLORS.length)];
    wizardFireball.style.backgroundColor = inputFireballColor.value;
  });

})();
