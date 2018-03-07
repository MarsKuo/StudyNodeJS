var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.cookies);
  // console.log(req.session);
  // req.session.username = 'tom';
  // req.session.email = 'aaa@com.tw';
  // res.cookie('name','Mary',{
  //   maxAge: 10000
  // })

  //res.render('index', { title: 'Express' });
  res.render('index',{
    userName: req.session.username,
    email: req.session.email
  })
});


router.post('/', function(req, res){
  req.session.username = req.body.username;
  req.session.email = req.body.email;
  res.redirect('/');
})




module.exports = router;
