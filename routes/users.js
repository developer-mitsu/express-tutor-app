var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function(req, res) {
  res.send('Hello, World');
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
