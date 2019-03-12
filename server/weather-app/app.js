/* eslint-disable no-console */
// console.log('start');


// setTimeout(() => {
//   console.log('2 sec timer');
// }, 2000);

// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);


// console.log('end');

const request = require('request');
const url = 'https://api.darksky.net/forecast/4642d9d58cac12bac551253eea99d337/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {

  if (error) {
    console.log('unable to connect to weather services');
  } else if (response.body.error) {
    console.log('unable to find locaiton');
  } else {
    console.log(`${response.body.daily.data[0].summary}`);

  }

})


// geocoding
//  address -> lat, long

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3l5ODcwMTE5IiwiYSI6ImNqdDY1ajZiaTBiOWE0NXFmMWkwMjg3YjYifQ.WYpo6LwgYc1m8o4vyj8SJA&limit=1';

request({ url: geoURL, json: true }, (error, response) => {

  if (error) {
    console.log('uable to connect to weather service'); // low level
  } else if (response.body.features.length === 0) {
    console.log('unable to find location, try again');
  } else {
    const data = response.body.features[0].center;
    console.log(`longtitude is ${data[0]}, latitude is ${data[1]}`);
  }
})