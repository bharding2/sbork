module.exports = function (player) {
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

  return player.height * heightCoef + player.weight * weightCoef + player.fortyYard * fortyYardCoef + (player.tenYard || 1.527) * tenYardCoef + (player.benchPress || 30.175) * benchPressCoef + player.verticalJump * verticalJumpCoef + player.broadJump * broadJumpCoef + player.threeCone * threeConeCoef + player.shortShuttle * shortShuttleCoef + intercept;
};
