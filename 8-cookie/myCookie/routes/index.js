var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  res.cookie('name','Mary',{
    maxAge: 10000
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
