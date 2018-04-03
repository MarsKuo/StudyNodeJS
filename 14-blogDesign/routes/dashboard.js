const express = require('express');
const router = express.Router();
const firebaseAdminDb = require('../connections/firebase_admin');
const stringtags = require('striptags');
const momont = require('moment');


const categoriesRef = firebaseAdminDb.ref('/categories/')
const articlesRef = firebaseAdminDb.ref('/articles/');

router.get('/archives', function (req, res, next) {

  let categories = {};

  categoriesRef.once('value').then(function (snapshot) {
    categories = snapshot.val();
    return articlesRef.orderByChild('update_time').once('value');
  }).then(function (snapshot) {
    const  articles =[];

    snapshot.forEach(function(snapshotChild){
      articles.push(snapshotChild.val());
    })

    articles.reverse();

    res.render('dashboard/archives', {
      title: 'Express',
      articles,
      categories,
      stringtags,
      momont
    });
  });

});

router.get('/article/:id', function (req, res, next) {
  const id = req.param('id');
  let categories = {};
  categoriesRef.once('value').then(function (snapshot) {
    categories = snapshot.val();
    return articlesRef.child(id).once('value');
  }).then(function (snapshot) {
    const article = snapshot.val();
    res.render('dashboard/article', {
      categories,
      article
    });
  })
});


router.get('/article/create', function (req, res, next) {
  categoriesRef.once('value').then(function (snapshot) {
    const categories = snapshot.val();
    res.render('dashboard/article', {
      categories,

    });
  })
});

router.post('/article/create', function (req, res) {
  const data = req.body;
  const articleRef = articlesRef.push();
  const key = articleRef.key;
  const updateTime = Math.floor(Date.now() / 1000);
  data.id = key;
  data.update_time = updateTime;

  articleRef.set(data).then(function () {
    res.redirect(`/dashboard/article/create/${key}`);
  })

});

router.post('/article/update/:id', function (req, res) {
  const data = req.body;
  const id = req.param('id');


  console.log(data);
  articlesRef.child(id).update(data).then(function () {
    res.redirect(`/dashboard/article/create/${key}`);
  })

});



router.get('/categories', function (req, res, next) {

  const messages = req.flash('info');



  categoriesRef.once('value').then(function (snapshot) {
    const categories = snapshot.val();
    res.render('dashboard/categories', {
      title: 'Express',
      categories,
      //flash儲存在session內的資料為陣列
      hasInfo: messages.length > 0,
      messages
    });
  });


});

router.post('/categories/create', function (req, res) {
  const data = req.body;
  const categoryRef = categoriesRef.push();
  const key = categoryRef.key;
  data.id = key;

  categoriesRef.orderByChild('path').equalTo(data.path).once('value')
    .then(function (snapshot) {
      if (snapshot.val() !== null) {
        req.flash('info', '已有相同路徑');
        res.redirect('/dashboard/categories');
      } else {
        categoryRef.set(data).then(function () {
          res.redirect('/dashboard/categories');
        })
      }
    })


})

router.post('/categories/delete/:id', function (req, res) {
  const id = req.param('id');
  categoriesRef.child(id).remove();
  req.flash('info', '欄位已刪除');
  res.redirect('/dashboard/categories');
})

module.exports = router;