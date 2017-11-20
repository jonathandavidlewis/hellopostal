import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import multer from 'multer';
import { uploadCloud } from './routes/cloudinary';
import { createPostcard } from './routes/lob';
import { addBorder } from './utility/cloudinary/add-border';


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

app.post('/api/cloud', upload.array('imageFile', 2), uploadCloud, addBorder, createPostcard);

app.get('/api/lob', createPostcard);

module.exports = app;
