const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const path = process.argv[3];
// console.log(url)
// console.log(path)

request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

fs.stat(path, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  stats.size;
  console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
});