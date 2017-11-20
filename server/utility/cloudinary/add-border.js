import { cloudinary } from './config';

const CLOUDINARY_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_SEC = process.env.CLOUDINARY_API_SEC;
const CLOUDINARY_NAME = process.env.CLOUDINARY_API_NAME;

const addBorder = (req, res, next) => {
  const newImage = cloudinary.image(req.body.image_public_id, {
    overlay: 'christmasBorder',
    width: 1875,
    height: 1278,
    crop: 'fill',
  });
  req.body.imageUrl = newImage.substring(10, newImage.length - 4); //trim src tags
  next();
};


exports.addBorder = addBorder;
