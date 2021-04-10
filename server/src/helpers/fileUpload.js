const dotenv = require('dotenv'),
  AWS = require('aws-sdk'),
  { v4: uuidv4 } = require('uuid'),
  sharp = require('sharp'),
  imagemin = require('imagemin'),
  mozjpeg = require('imagemin-mozjpeg'),
  isJpg = require('is-jpg');

dotenv.config();

// AWS CONFIG

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
});

// CONVERT TO JPG

const convertToJpg = async (input) => {
  if (isJpg(input)) {
    return input;
  }
  return sharp(input).jpeg().toBuffer();
};

// HELPER FUNCTION TO UPLOAD FILE TO AWS
const uploadSingleFile = async (file, type) => {
  // COMPRESS IMAGE FILE
  let fileBuffer = file.data;

  if (type === 'jpg') {
    fileBuffer = await imagemin.buffer(file.data, {
      plugins: [convertToJpg, mozjpeg({ quality: 85 })]
    });
  }

  const uniqueId = uuidv4();
  const parts = file.name.split('.');
  parts.pop();
  const fileName = parts.join('');

  // PARAMS
  const fileParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}_${uniqueId}.${type}`,
    Body: fileBuffer
  };

  // UPLOAD TO AWS
  try {
    const fileRes = await s3.upload(fileParams).promise();
    return fileRes.Location;
  } catch (err) {
    console.log(err);
  }
};

// UPLOAD FILES AND RETURN ULRS
const uploadFilesAndGetUrl = async (videoFile, imageFile) => {
  const imageUrl = await uploadSingleFile(imageFile, 'jpg');
  const videoUrl = await uploadSingleFile(videoFile, 'mp4');

  console.log('image url', imageUrl);
  console.log('vide url', videoUrl);

  return { imageUrl, videoUrl };
};

module.exports = { uploadSingleFile, uploadFilesAndGetUrl };
