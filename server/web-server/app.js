/* eslint-disable no-console */
const express = require('express');
const path = require('path');

// console.log(__dirname);
// console.log(path.join(__dirname, './public'));

const publicDirectory = path.join(__dirname, './public');

const app = express();

app.use(express.static(publicDirectory));

app.get('', (req, res) => {
  res.send('<h1>HA</h1>');
})

app.get('/help', (req, res) => {
  res.send({ name: 'yingying', gender: 'F' });
})


app.get('/about', (req, res) => {
  res.send('about');
})



app.listen('3100', () => {
  console.log('Server is up on port 3100');
});