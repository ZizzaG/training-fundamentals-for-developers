require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/kitten.jpg', {
        public_id: 'c441famxlp78bpo7xm4p',
        unique_filename: false
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));