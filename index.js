const sbork = require('./sbork');

var testPlayer = {
  height: 6.16,
  weight: 213,
  fortyYard: 4.35,
  tenYard: 1.53,
  benchPress: 18,
  verticalJump: 45,
  broadJump: 11.58,
  threeCone: 7.06,
  shortShuttle: 4.3,
  intercept: 181.924227
};

console.log(sbork.wr(testPlayer));