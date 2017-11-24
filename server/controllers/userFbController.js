const FBuser = require('../models/userFb')
const jwt = require('jsonwebtoken')
const FB = require('fb')

const login = (req,res)=>{
  console.log('ini token',req.headers.token);
  FBuser.modelFb(req.headers.token)
  .then(data=>{
    console.log('ini data loign',data)
    var jwtToken= jwt.sign(data, process.env.SECRET_KEY)
    var decode = jwt.verify(jwtToken, process.env.SECRET_KEY)
    console.log('hasildecode', decode)
  })
}

module.exports = {login};