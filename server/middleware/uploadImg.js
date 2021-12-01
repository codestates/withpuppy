const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const storage = multerS3({
  s3,
  bucket: "finalproject-image-hosting",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read-write",
  key: function (req, file, cb) {
    const { userId, puppyId } = req.body;

    cb(null, `puppyProfile/$user=${userId}&puppy=${puppyId}`);
  },
});

module.exports = multer({ storage });
