const Url = require("../models/Url");

const getAllUrlsController = async (req, res) => {
  const allUrls = await Url.find({});
  if (!allUrls) res.status(404).json({ message: "db empty" });
  return res.status(200).json(allUrls);
};
module.exports = getAllUrlsController;
