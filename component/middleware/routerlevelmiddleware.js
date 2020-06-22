var express = require('express')
var app = express()
var router = express.Router()

// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
    console.log('here reached')
    //if (!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id', function (req, res) {
    console.log('router.get')
    res.send('hello, user!')
})

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
})

module.exports = router 