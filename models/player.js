const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  fortyYard: Number,
  tenYard: Number,
  benchPress: Number,
  verticalJump: Number,
  broadJump: Number,
  threeCone: Number,
  shortShuttle: Number
});

module.exports = mongoose.model('Player', PlayerSchema);