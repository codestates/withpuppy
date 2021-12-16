const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const sharp = require('sharp');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const resetProfile = require('../controllers/utils/resetBucketFolder');
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
  acl: 'public-read-write',
  shouldTransform: true,
  transforms: [
    {
      id: 'resized',
      key: function (req, file, cb) {
        const { puppyId, userId } = req.body;

        if (puppyId) {
          resetProfile('puppyId', puppyId, s3, cb, file);
        } else if (userId) {
          resetProfile('userId', userId, s3, cb, file);
        }
      },
      transform: function (req, file, cb) {
        cb(null, sharp().resize(110, 110).jpeg());
      },
    },
  ],
});

module.exports = multer({ storage });
