const { Puppy } = require("../../models");
module.exports = {
  changePuppyProfile: async (req, res) => {
    const targetData = req.file.transforms.find(
      (transform) => transform.id === "resized"
    );
    await Puppy.update(
      { thumbImg: targetData.location },
      { where: { id: req.body.userId } }
    );
    res.status(200).json(targetData.location);

    res.json({ data: req.file });
  },
};
