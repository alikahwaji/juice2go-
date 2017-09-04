var express = require('express')
var router = express.Router()
var db = require('./db')

router.get('/', function(req, res) {
    res.render('index', { hi: 'Hello World!' })
})

// router.get('/orders', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.get('/order-fulfil/:id', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.get('/orders/new', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
// router.post('/orders/new', function(req, res) {
//     res.render('index', { hi: 'Hello World!' })
// })
router.get('/orders/:id', function(req, res) {
    const id = req.params.id
    db.getOrder(id, (req.app.get('connection')))
        .then(function(orderinfo) {
            res.render('/orders/view', { orderinfo: orderinfo[0] })
        })
        .catch(function(err) {
            res.status(500).send('Database Error', err.message)
        })
})


module.exports = router