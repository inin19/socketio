/* eslint-disable no-console */
setTimeout(() => {
  console.log('two senconds');
}, 2000);

const names = ['yingying', 'ying', 'steven'];
const shortnames = names.filter(item => item.length < 6);

console.log(shortnames);


// const geocode = (address, callback) => {

//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longtitude: 0,
//     };
//     callback(data);
//   }, 2000);



// }

// geocode('Philadelphia', (data) => {
//   console.log(data);
// });


const name = 'Yingying';
const age = 4;

const user = {
  name,
  age
}

const { name: userName, rating = 5 } = user;

console.log(userName, rating);