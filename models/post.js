const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PostSchema = mongoose.Schema({
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

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", PostSchema);
