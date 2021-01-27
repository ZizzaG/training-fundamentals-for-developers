require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.resources({
  max_results: '100'
})
  .then(result => {
    console.log(result)
    console.log("Count:", result.resources.length)
  })
  .catch(error => console.error(error));