require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://cdn.mariatash.com/image/upload/v1611512399/tech/7FD5639C-16B8-44FC-9235-68BE2F8CAA19_z62duw.jpg')
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));