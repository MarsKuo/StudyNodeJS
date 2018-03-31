var express = require('express');
var router = express.Router();
var firebasedb =require('../Connections/firebase_admin');
var firebase = require('../Connections/firebase_connect');

router.get('/', function (req, res, next) {

    console.log(firebase.auth())
    // firebasedb.ref().once('value',function(snapshot){
    //     console.log(snapshot.val());
    // })
    res.render('index', {
        title: '六角學院留言板'
    });
});
/* GET home page. */
module.exports = router;