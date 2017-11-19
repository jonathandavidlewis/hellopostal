import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cloudinary from './cloudinary/config';
import multer from 'multer';
import { createPostcard, createPostcardTest } from './lob';

const app = express();
<<<<<<< HEAD
const upload = multer({
  dest: path.join(__dirname,'/../uploads/')
});
=======
// const upload = multer({
//   dest:'/../uploads/'
// });
>>>>>>> Sends lob request on GET to /api

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});

app.post('/api/cloudinary', (req, res) => {
  console.log('Testing cloudinary POST method:', cloudinary);

  res.end('TESTING CLOUDINARY');
});

app.use('/api/lob', createPostcard);

module.exports = app;
