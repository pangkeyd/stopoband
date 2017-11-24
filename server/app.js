const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
// const MusicPlayer = require('musicplayer-api').MusicPlayer
// const player = new MusicPlayer()

// player.addTrack ''

// function playSound(url){
//   var a = new Audio(url)
//   a.play()
// }
//
// playSound()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes

const login = require('./routers/user')
const index = require('./routers/index')

app.use('/login', login)
app.use('/', index)

app.listen(process.env.PORT_DEFAULT, () => {
  console.log(`AYO JALAN!`)
})
