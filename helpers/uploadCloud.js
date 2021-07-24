const cloudinary = require('cloudinary').v2
require('../configs/cloudinary-config')

const uploadCloud = (pathFile) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(pathFile, {
      folder: 'Avatars',
      transformation: {
        width: 250,
        crop: 'fill'
      }
    },
    (error, result) => {
      if (error) {
        reject(error)
      }
      if (result) {
        resolve(result)
      }
    })
  })
}

const delCloudAvatar = (idCloudAvatar) => {
  cloudinary.uploader.destroy(idCloudAvatar, (error, result) => {
    console.log(error, result)
  })
}

module.exports = { uploadCloud, delCloudAvatar }
