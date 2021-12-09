const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.MULTER_ACCESS_KEY,
  secretAccessKey: process.env.MULTER_ACCESS_SECRET,
  region: process.env.MULTER_S3_REGION,
});

const storage = multerS3({
  s3,
  bucket: process.env.MULTER_S3_URL,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read-write",
  // metadata: function (req, file, cb) {
  //   console.log(req.body);
  //   cb(null, Object.assign({}, req.body));
  // },
  key: function (req, file, cb) {
    const { puppyId, userId } = req.body;

    if (puppyId) {
      s3.deleteObject(
        { Bucket: process.env.MULTER_S3_URL, Key: `profileImg/puppyId=${puppyId}` },
        (err, data) => {
          console.log(err, data);
          if (!err) {
            cb(null, `profileImg/puppyId=${puppyId}`);
          }
        }
      );
    } else if (userId) {
      s3.deleteObject(
        { Bucket: process.env.MULTER_S3_URL, Key: `profileImg/userId=${userId}` },
        (err, data) => {
          console.log(err, data);
          if (!err) {
            cb(null, `profileImg/puppyId=${userId}`);
          }
        }
      );
    }
  },
});

module.exports = multer({ storage });
