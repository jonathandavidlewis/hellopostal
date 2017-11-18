import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cloudinary from './cloudinary/config';
import multer from 'multer';

const app = express();
const upload = multer({
  dest:'/../uploads/'
});

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

module.exports = app;
