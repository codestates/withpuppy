const dotenv = require("dotenv");
dotenv.config();

module.exports = (targetType, targetId, s3, cb, file) => {
  let params = {
    Bucket: process.env.MULTER_S3_URL,
    Prefix: `profileImg/${targetType}=${targetId}/`,
  };

  //버킷 폴더 확인(object의 개념으로)
  s3.listObjects(params, (err, data) => {
    if (err) console.log("err", err);

    if (data.Contents.length) {
      //delete를 위한 param 재정의
      delete params.Prefix;
      params.Delete = {
        Objects: data.Contents.map((content) => {
          return { Key: content.Key };
        }),
      };

      //객체내용 비우고 새로 이미지 업로드
      s3.deleteObjects(params, (err, data) => {
        if (err) console.log("err", err);
        console.log(data);

        cb(
          null,
          `profileImg/${targetType}=${targetId}/${file.originalname + Date.now() + Math.random()}`
        );
      });
    } else {
      cb(
        null,
        `profileImg/${targetType}=${targetId}/${file.originalname + Date.now() + Math.random()}`
      );
    }
  });
};
