const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ClientSchema = mongoose.Schema({
  name: String,
  grade: String,
  phone:String
  
});
ClientSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Client", ClientSchema);
