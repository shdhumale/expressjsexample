//Aquire express module
const express = require('express')
//create app using express function
const app = express()
const port = 3000
//app.use(express.static('public'))
app.use('/xyzpath', express.static('public'))

//getting ready for accepting GET request on URL "/" and sending hellow world response
app.get('/', (req, res) => res.send('Get request on /'))

app.post('/', (req, res) => res.send('Post request on /'))

app.put('/user', (req, res) => res.send('Put Request on /'))

app.delete('/employee', (req, res) => res.send('Delete request on /'))

//app.get(/a/, (req, res) => res.send('routing regular expression request on /'))

app.get('/users/:userId/books/:bookId', function (req, res) {
    console.log(req.params.userId, req.params.bookId)
    res.send(req.params)
})


app.get('/flights/:from-:to', function (req, res) {
    console.log(req.params.from, req.params.to)
    res.send(req.params)
})

app.get('/plantae/:genus.:species', function (req, res) {
    console.log(req.params.genus, req.params.species)
    res.send(req.params)
})

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})


var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})
//Listen to the port that is define along with the console log that indicate starting of the server.
app.listen(port, () => console.log(`Example app listening at http:localhost:${port}`))
