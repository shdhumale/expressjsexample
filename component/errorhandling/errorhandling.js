var express = require('express')
var fs = require('fs')
var app = express()
var port = 3000
//Sync error handling default done by the express
/* app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
}) */
//ASync error handling need to be done using next function so that we can transfer the error to Express frame work to handle
/* app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err) // Pass errors to Express.
        } else {
            res.send(data)
        }
    })
}) */
//ASync error handling need to be done using next function so that we can transfer the error to Express frame work to handle
/* app.get('/', [
    function (req, res, next) {
        fs.writeFile('d:\\', 'data', next)
        //next(err)
    },
    function (req, res) {
        res.send('OK')
    }
]) */

//using Try and catch to handle the Async function This can be done when we are trying to connect db.

app.get('/', [
    function (req, res, next) {
        try {
            const post = db.post.insert({ title, author });
            res.json(post);
        } catch (error) {
            //We can directly catch the error her and do what ever we want to do 
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
            });
            //Else we can give it to Express function using next which will be caught by the given below functions.
            //next(error)
        }

    }
])


/* app.get('/', [
    function (req, res, next) {
        fs.readFile('/maybe-valid-file', 'utf-8', function (err, data) {
            res.locals.data = data
            next(err)
        })
    },
    function (req, res) {
        res.locals.data = res.locals.data.split(',')[1]
        res.send(res.locals.data)
    }
]) */

app.use(function (err, req, res, next) {
    res.status(500);
    res.send(err.message + " ---Oops, something went wrong.")
});
app.listen(port, () => console.log(`Error handling  listening at http:localhost:${port}`))