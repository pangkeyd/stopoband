const FBuser = require('../models/userFb')
const jwt = require('jsonwebtoken')
const FB = require('fb')

const login = (req,res)=>{
  console.log('ini token',req.headers.token);
}

module.exports = {login};