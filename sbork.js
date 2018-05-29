const averages = require('./averages');

module.exports = function (player, pos) {
  if (!pos) pos = 'default';

  let heightCoef = -4.592111;
  let weightCoef = 0.361056;
  let fortyYardCoef = -15.159259;
  let tenYardCoef = -45.532307;
  let benchPressCoef = 0.252199;
  let verticalJumpCoef = 1.32729;
  let broadJumpCoef = 9.557272;
  let threeConeCoef = -5.985102;
  let shortShuttleCoef = -18.731278;
  let intercept = 181.924227;

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
