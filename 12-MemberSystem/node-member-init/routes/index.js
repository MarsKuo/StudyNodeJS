var express = require('express');
var router = express.Router();
var firebasedb = require('../Connections/firebase_admin');
var firebase = require('../Connections/firebase_connect');

router.get('/', function (req, res, next) {
    firebasedb.ref('list').once('value',function(snapshot){
        var auth = req.session.uid;
        res.render('index', {
            title: '六角學院留言板',
            auth: auth,
            errors: req.flash('errors'),
            list: snapshot.val()
        });
    })
    // console.log(firebase.auth())
    // firebasedb.ref().once('value',function(snapshot){
    //     console.log(snapshot.val());
    // })
  
});
/* GET home page. */
module.exports = router;