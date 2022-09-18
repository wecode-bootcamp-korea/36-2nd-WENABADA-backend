const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
})

async function deleteObject(key) {
  const bucket = 'wenabada';
  try {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return await s3.deleteObject(params).promise();
  } catch (err) {
    console.error(err);
  }
}


module.exports = deleteObject;