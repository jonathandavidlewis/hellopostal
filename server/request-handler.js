import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});


export default app;
