// const express = require('express');
import express from 'express';
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Check home route');
  res.end('home page');
});

module.exports = app;
export default app;
