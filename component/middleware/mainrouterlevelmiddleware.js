var express = require('express')
var app = express()
/* var router = express.Router()


// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
}) */

/* var userender = require('./userender')
app.use('/', userender) */
// mount the router on the app
//app.use('/', router)

var routerlevelmiddleware = require('./routerlevelmiddleware')
app.use('/', routerlevelmiddleware)

app.listen(3000)