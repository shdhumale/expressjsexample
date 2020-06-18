var express = require('express')
var router = express.Router()

//middleware that is specific to this router
//We will learn middle ware in details in next chapte. For now just remember it is the additional funtionality that we want to introduced
//as a middle men before the reques is executed.
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.send('home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About Pages')
})
// define the siddhu route
router.get('/siddhu', function (req, res) {
    res.send('Siddhu Pages')
})
module.exports = router 