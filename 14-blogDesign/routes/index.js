var express = require('express');
var router = express.Router();
const convertPagination = require('../modules/convertPagination')

var firebaseAdminDb = require('../connections/firebase_admin');

const ref = firebaseAdminDb.ref('any');

// ref.once('value',function(snapshot){
//   console.log(snapshot.val());
// })

/* GET home page. */
router.get('/', function (req, res, next) {

  let currentPage = req.query.page || 1;

  const articles = [];

  //分頁
  const data = convertPagination(articles,currentPage)
  //分頁結束
  res.render('index', { data,title: 'Express' });

});

router.get('/post', function (req, res, next) {
  res.render('post', { title: 'Express' });
});


router.get('/dashboard/signup', function (req, res, next) {
  res.render('dashboard/signup', { title: 'Express' });
});

module.exports = router;
