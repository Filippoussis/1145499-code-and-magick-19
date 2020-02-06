'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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
  COAT_COLORS.splice(randomIndexCoatColor, 1);
  EYES_COLORS.splice(randomIndexEyesColor, 1);
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
