'use strict';

(function () {
  var randomInteger = function (min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
  };

  window.random = randomInteger;
})();
