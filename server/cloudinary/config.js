import { v2 as cloudinary } from 'cloudinary';

const CLOUDINARY_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_SEC = process.env.CLOUDINARY_API_SEC;
const CLOUDINARY_NAME = process.env.CLOUDINARY_API_NAME;

const uploads = {};

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SEC,
});

const uploadPhoto = (inputFilePath, title) => {
  const waitForAllUploads = (id, error, image) => {
    uploads[id] = image;
    return uploads[id].url;
  };

  return cloudinary.uploader.upload(
    inputFilePath, {
      public_id: title,
      width: 2000,
      height: 1000,
      crop: 'fit',
    },
    (error, image) => {
      if (error) {
        console.error('Cloudinary error:', error);
      }
      waitForAllUploads(inputFilePath, error, image);
    },
  );
};

module.exports = { cloudinary, uploadPhoto };
