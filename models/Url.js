const { Schema, model } = require("mongoose");
const urlSchema = new Schema(
  {
    longUrl: {
      required: true,
      type: String,
    },
    shortUrl: {
      required: true,
      type: String,
      unique: true,
    },
    history: [
      {
        createdTime: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Url = model("Urls", urlSchema);
module.exports = Url;
