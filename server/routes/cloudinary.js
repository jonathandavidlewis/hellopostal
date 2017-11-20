import { uploadPhoto } from './../utility/cloudinary/config';

exports.uploadCloud = (req, res, next) => {
  if (req.files[0] === undefined) {
    next();
  } else {
    const photoPath = req.files[0].path;
    const photoName = req.files[0].originalname;

    uploadPhoto(photoPath, photoName)
      .then((response) => {
        req.body.imageUrl = response.secure_url;
        req.body.image_public_id = `${response.public_id}.${response.format}`;
        next();
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
