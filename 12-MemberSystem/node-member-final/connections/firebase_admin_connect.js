var admin = require("firebase-admin");
// 輸入自己的金鑰
var serviceAccount = require("輸入自己的金鑰");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "輸入自己的 databaseURL"
});

var db = admin.database();

module.exports = db;