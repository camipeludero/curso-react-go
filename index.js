//importaciones
const express = require('express')
const cors = require("cors")
const userModel = require('./model/user.model')

//declaraciones
const app = express()
const port = 5000

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//puerto
app.get('/users', (req, res) => { 
    const users = userModel.getAllUsers();

    res.status(200).json(users)
    console.log(users)
})

//escucha
app.listen(port, () => console.log('> Server is up and running on port : ' + port))