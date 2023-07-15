const Url = require("../models/Url");

const updateUrlController = async (req, res) => {
  const { updatedUrl, _id } = req.body;

  if (!updatedUrl && !_id) {
    res.status(400).json({ message: "updatedUrl undifind from req.body" });
  }
  const updated = await Url.updateOne({ _id }, { longUrl: updatedUrl });
  if (!updated) {
    res.status(404).json({ message: "not able to update." });
  }
  // await updated.save();
  res.status(200).json({ message: "updated successfully" });
};
module.exports = updateUrlController;
