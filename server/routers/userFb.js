var express = require('express')
var router = express.Router()
const userFb = require('../controllers/userFbController')
const FB = require('fb')

const setAccessToken = (req,res,next)=>{
//  JSON.stringify(console.log('token dari roputers',req.headers.token)) 
  FB.setAccessToken(req.headers.token)
  next()


}

router.post('/',setAccessToken,userFb.login)

module.exports = router;