'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_HEIGHT = 16;
  var BAR_WIDTH = 50;
  var BAR_GAP = 40;
  var BAR_MAX_HEIGHT = 150;


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var colorHsl = function (i) {
    var saturation = 25;
    saturation += 10 * i;
    return 'hsl(' + 240 + ', ' + saturation + '%, ' + 50 + '%)';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxTime = getMaxElement(times);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'red';
    ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP + FONT_HEIGHT);
    ctx.fillStyle = 'blue';
    ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP + 2 * FONT_HEIGHT);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
      ctx.fillText(Math.round(times[i]), CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_HEIGHT - GAP - FONT_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime));

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = colorHsl(i);
      }
      ctx.beginPath();
      ctx.moveTo(CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_HEIGHT);
      ctx.lineTo((CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i), (CLOUD_HEIGHT - FONT_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime));
      ctx.lineTo((CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i + BAR_WIDTH), (CLOUD_HEIGHT - FONT_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime));
      ctx.lineTo((CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i + BAR_WIDTH), CLOUD_HEIGHT - FONT_HEIGHT);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  };
})();
