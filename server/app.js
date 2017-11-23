// require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/asoi')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// const index = require('./routers/index')

//index
// app.use('/', index)
const userFb = require('./routers/userFb')


app.use('/login',userFb)
//listen
app.listen(3000, () => console.log('Port 3000!'))