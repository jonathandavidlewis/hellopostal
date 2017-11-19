import { uploadPhoto } from './../cloudinary/config';

exports.uploadCloud = (req, res, next) => {
  const photoPath = req.files[0].path;
  const photoName = req.files[0].originalname;

  uploadPhoto(photoPath, photoName)
    .then((response) => {
      req.body.imageUrl = response.secure_url;
      next();
    })
    .catch((error) => {
      console.error(error);
    });
};
