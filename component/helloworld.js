//Aquire express module
const express = require('express')
//create app using express function
const app = express()
const port = 3000

//getting ready for accepting GET request on URL "/" and sending hellow world response
app.get('/', (req, res) => res.send('Hello World!'))

//Listen to the port that is define along with the console log that indicate starting of the server.
app.listen(port, () => console.log(`Example app listening at http:localhost:${port}`))
