/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(path.join(__dirname, './public'));

const publicDirectory = path.join(__dirname, './public');
const viewsPath = path.join(__dirname,'./templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));

app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'yingying'
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'help',
    name: 'ying'
  })
})


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about'
  })
})



app.listen('3100', () => {
  console.log('Server is up on port 3100');
});