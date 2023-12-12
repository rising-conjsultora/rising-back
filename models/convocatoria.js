const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ConvocatoriaSchema = mongoose.Schema({
  title: String,
  miniature: String,

  position:String,
  requirements:String,
  date:String,
  pay:Number,

  content: String,
  path: {
    type: String,
    unique: true,
  },
  created_at: Date,
});

ConvocatoriaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Convocatoria", ConvocatoriaSchema);
