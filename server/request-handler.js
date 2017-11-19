import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import multer from 'multer';
import { createPostcard } from './lob';
import { uploadPhoto } from './cloudinary/config';

const app = express();
const upload = multer({
  dest: path.join(__dirname, '/../uploads/'),
});

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});

app.post('/api/cloud', upload.array('imageFile', 2), (req, res, next) => {
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
}, createPostcard);

app.get('/api/lob', createPostcard);

module.exports = app;
