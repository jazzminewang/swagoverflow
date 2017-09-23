const fs = require('fs');
const Storage = require('@google-cloud/storage');

const getFilePaths = () => fs.readdir('../photosToUpload/', (err, paths) => {
  paths.map(filePath => {
    console.log('../photosToUpload/' + filePath);
  });
})

const x = getFilePaths();
console.log(x)

module.exports = {
  getFilePaths: getFilePaths
}