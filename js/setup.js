'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var MAX_WIZARDS = 4;

var wizards = [];

var randomInteger = function (min, max) {
  var rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

for (var i = 0; i < MAX_WIZARDS; i++) {

  var randomIndexFullName = randomInteger(0, WIZARD_NAMES.length);
  var randomIndexCoatColor = randomInteger(0, COAT_COLORS.length);
  var randomIndexEyesColor = randomInteger(0, EYES_COLORS.length);

  wizards[i] = {
    name: WIZARD_NAMES[randomIndexFullName] + ' ' + WIZARD_SURNAMES[randomIndexFullName],
    coatColor: COAT_COLORS[randomIndexCoatColor],
    eyesColor: EYES_COLORS[randomIndexEyesColor]
  };

  // получение уникальных значений методом "швейцарского" ножа:)
  WIZARD_NAMES.splice(randomIndexFullName, 1);
  WIZARD_SURNAMES.splice(randomIndexFullName, 1);
  // COAT_COLORS.splice(randomIndexCoatColor, 1);
  // EYES_COLORS.splice(randomIndexEyesColor, 1);
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && setupUserName !== document.activeElement) {
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var setupPlayer = document.querySelector('.setup-player');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
var inputFireballColor = wizardFireball.querySelector('input[name = "fireball-color"]');


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[randomInteger(0, COAT_COLORS.length)];
  inputCoatColor.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[randomInteger(0, EYES_COLORS.length)];
  inputEyesColor.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener('click', function () {
  inputFireballColor.value = FIREBALL_COLORS[randomInteger(0, FIREBALL_COLORS.length)];
  wizardFireball.style.backgroundColor = inputFireballColor.value;
});
