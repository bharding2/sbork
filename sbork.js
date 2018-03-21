const averages = require('./averages');

module.exports = function (player, pos) {
  if (!pos) pos = 'default';

  var heightCoef = -4.592111;
  var weightCoef = 0.361056;
  var fortyYardCoef = -15.159259;
  var tenYardCoef = -45.532307;
  var benchPressCoef = 0.252199;
  var verticalJumpCoef = 1.32729;
  var broadJumpCoef = 9.557272;
  var threeConeCoef = -5.985102;
  var shortShuttleCoef = -18.731278;
  var intercept = 181.924227;

  return (player.height || averages[pos].height) * heightCoef +
    (player.weight || averages[pos].weight) * weightCoef +
    (player.fortyYard || averages[pos].fortyYard) * fortyYardCoef +
    (player.tenYard || averages[pos].tenYard) * tenYardCoef +
    (player.benchPress || averages[pos].benchPress) * benchPressCoef +
    (player.verticalJump || averages[pos].verticalJump) * verticalJumpCoef +
    (player.broadJump || averages[pos].broadJump) * broadJumpCoef +
    (player.threeCone || averages[pos].threeCone) * threeConeCoef +
    (player.shortShuttle || averages[pos].shortShuttle) * shortShuttleCoef +
    intercept;
};
