const Url = require("../models/Url");

const deleteUrlController = async (req, res) => {
  try {
    const urlId = req.params.id;
    const deletedUrl = await Url.findByIdAndDelete(urlId);

    if (!deletedUrl) {
      return res.status(404).json({ message: "URL not found" });
    }

    res.json({ message: "URL deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = deleteUrlController;
