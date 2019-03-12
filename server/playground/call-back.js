/* eslint-disable no-console */
setTimeout(() => {
  console.log('two senconds');
}, 2000);

const names = ['yingying', 'ying', 'steven'];
const shortnames = names.filter(item => item.length < 6);

console.log(shortnames);