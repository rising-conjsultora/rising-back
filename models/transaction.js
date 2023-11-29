const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({

  course:String,
  city:String,
  clientci:String,
  clientname:String,
  clientid:String,
  price:Number,
  seller:String,
  date:Date,
  state:Boolean

});

module.exports = mongoose.model("transaction", transactionSchema);
