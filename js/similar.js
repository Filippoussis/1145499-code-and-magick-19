'use strict';

(function () {

  var MAX_WIZARDS = 4;
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  setup.querySelector('.setup-similar').classList.remove('hidden');

  var wizards = [];

  for (var i = 0; i < MAX_WIZARDS; i++) {

    var randomIndexFullName = window.random(0, window.date.WIZARD_NAMES.length);
    var randomIndexCoatColor = window.random(0, window.date.COAT_COLORS.length);
    var randomIndexEyesColor = window.random(0, window.date.EYES_COLORS.length);

    wizards[i] = {
      name: window.date.WIZARD_NAMES[randomIndexFullName] + ' ' + window.date.WIZARD_SURNAMES[randomIndexFullName],
      coatColor: window.date.COAT_COLORS[randomIndexCoatColor],
      eyesColor: window.date.EYES_COLORS[randomIndexEyesColor]
    };

    window.date.WIZARD_NAMES.splice(randomIndexFullName, 1);
    window.date.WIZARD_SURNAMES.splice(randomIndexFullName, 1);
  }

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

})();
