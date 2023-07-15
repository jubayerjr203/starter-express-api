const { format } = require("date-fns");
const Url = require("../models/Url");
const { generate } = require("shortid");
const urlController = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({ message: "url is undifind" });
  }

  const newEntry = new Url({
    longUrl: url,
    shortUrl: generate(),
    history: [{ createdTime: format(new Date(), "HH:mm:ss - dd/MM/yyyy") }],
  });
  await newEntry.save();
  console.log(newEntry);
  res.status(200).json({ message: newEntry });
};

module.exports = urlController;
