const express = require('express')
const router = express.Router()
const Item = require('../controllers/index')
const Multer = require('multer')
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})

router.get('/', Item.getData)

router.post('/', multer.single('image'), Item.saveData)

module.exports = router
