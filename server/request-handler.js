import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import multer from 'multer';
import { createPostcard } from './lob';
import { cloudinary, uploadPhoto } from './cloudinary/config';

const app = express();
const upload = multer({
  dest: path.join(__dirname, '/../uploads/')
});

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});

app.post('/api/cloud', upload.array('imageFile', 2), (req, res, next) => {
  const photoData = req.files;
  console.log('Running');
  // console.log('Cloudinary req:', req);
  console.log('Cloudinary photoData:', req.files);
  console.log('Cloudinary request:', req);

  // return new Promise(function(resolve, reject) {
  //   cloudConfig.uploadPhoto(photoPathFor)
  // })

  // res.end('TESTING CLOUDINARY');
  next();
}, createPostcard);

app.get('/api/lob', createPostcard);

module.exports = app;
