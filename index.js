//importaciones
const express = require('express')
const cors = require("cors")

//declaraciones
const app = express()
const port = 5000

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//puerto
app.post('/', (req, res) => {

    const user = req.body
    console.log(user)
    res.send('Holisss mundoo :)')

})

//escucha
app.listen(port, () => console.log('> Server is up and running on port : ' + port))