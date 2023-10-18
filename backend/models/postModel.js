const { model, Schema } = require("mongoose");

const postSchema = Schema({
  title: { type: String, default: "COVID19" },
  text: { type: String, required: [true, "Provide field text"] },
  rating: { type: Number, default: "00" },
  author: { type: String, required: [true, "Provide field author"] },
});

module.exports = model("posts", postSchema);
