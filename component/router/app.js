
//Aquire express module
const express = require('express')
//create app using express function
const app = express()
const port = 3000

var expressrouter = require('./expressrouter')
app.use('/expressrouter', expressrouter)

app.listen(port, () => console.log(`Example app listening at http:localhost:${port}`))