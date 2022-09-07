const multer = require("multer");
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
})
const upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: 'wenabada',
            contentType: multerS3.AUTO_CONTENT_TYPE
,            key: (req, file, cb) => {
                cb(null, `upload/${Date.now()}_${file.originalname}`)
            }
        })
    });
module.exports = upload;