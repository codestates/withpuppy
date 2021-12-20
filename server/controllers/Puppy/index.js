const { Puppy } = require("../../models");
module.exports = {
  changePuppyProfile: async (req, res) => {
    const targetData = req.file.transforms.find((transform) => transform.id === "resized");
    console.log(req.body.puppyId);
    await Puppy.update({ puppyProfile: targetData.location }, { where: { id: req.body.puppyId } });
    res.status(200).json(targetData.location);
  },
};
