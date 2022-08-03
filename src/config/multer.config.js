const multer = require("multer")

storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

module.exports = {storage};