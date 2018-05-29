const sbork = require('./sbork');

var testPlayer = {
  height: 5.77,
  weight: 177,
  fortyYard: 4.5,
  tenYard: 1.45,
  benchPress: 15,
  verticalJump: 40,
  broadJump: 11,
  threeCone: 6.56,
  shortShuttle: 4.06
};

// var testPlayer = {
//   height: 6.16,
//   weight: 213,
//   fortyYard: 4.35,
//   tenYard: 1.53,
//   // benchPress: 18,
//   verticalJump: 45,
//   broadJump: 11.58,
//   threeCone: 7.06,
//   shortShuttle: 4.3
// };

console.log(sbork(testPlayer, 'cb'));