var express = require('express')
var router = express.Router()
const userFb = require('../controllers/userFbController')
const FB = require('fb')

const setAccessToken = (req,res,next)=>{
  console.log('token',req.headers.token)
  FB.setAccessToken(req.headers.token)
  next()


}

router.post('/',setAccessToken,userFb.login)

module.exports = router;