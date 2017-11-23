const mongoose = require('mongoose')
const FB = require('fb')
const userFbSchema = new mongoose.Schema({
  fb_id: String,
  name: String,
  email: String
})

function modelFb(token){
  return new Promise((resolve,reject)=>{
    FB.api('me',{
      fields: [ 'id','name','email'],  access_token: token}, (response)=>{
        resolve(response)
      })
  })
}
const userFb = mongoose.model('userFb',userFbSchema)

module.exports = {
  userFb,
  modelFb
};