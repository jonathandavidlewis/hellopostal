import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cloudinary from './cloudinary/config';
import multer from 'multer';
import { createPostcard } from './lob';

const app = express();
const upload = multer({
  dest: path.join(__dirname,'/../uploads/')
});

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});

app.post('/api/cloud/', (req, res) => {
  console.log('Testing cloudinary POST method:', req);

  res.end('TESTING CLOUDINARY');
});

app.get('/api/lob', createPostcard);

module.exports = app;
