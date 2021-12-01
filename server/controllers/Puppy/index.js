const { Puppy } = require("../../models");
module.exports = {
  changePuppyProfile: (req, res) => {
    console.log(req.file.location, "work");
    res.json({ data: req.file.location });
  },
};
