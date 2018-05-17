const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giphySchema = new Schema({
  source: { type: String, required: true },
  alt: { type: String, required: true }
});

const Gif = mongoose.model("Gif", giphySchema);

module.exports = Gif;
