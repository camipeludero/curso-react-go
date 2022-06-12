//importaciones
const express = require('express')
const cors = require("cors")
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const { tokenValidator } = require('./utils')
require("./storage/connection")

//declaraciones
const app = express()
const port = 5000

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/auth", authRoutes);
app.use("/users", tokenValidator, userRoutes);


//escucha
app.listen(port, () => console.log('> Server is up and running on port : ' + port))