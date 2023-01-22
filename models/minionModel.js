const mongoose = require("mongoose");

// -------------------------- //
// Minion Schema deffination
// ------------------------- //
const minionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A minion must have a name"],
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "A minion must have an age"],
    min: [0, "Age should be more or equal zero"],
  },
  color: {
    type: String,
    required: [true, "A minion must have a color"],
    trim: true,
    lowercase: true,
  },
});

// Minion model created out of the minion schema
const Minion = mongoose.model("Minion", minionSchema);

module.exports = Minion;
