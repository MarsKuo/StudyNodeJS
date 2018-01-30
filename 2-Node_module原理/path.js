var path = require('path');

// 當你載入 var path = require('path'); ，便可用下述語法取得檔案與目錄路徑，詳細也可瀏覽 Node.js PATH API文件

// 抓目錄路徑： path.dirname('/xx/yy/zz.js') 回傳 /xx/yy 
// 路徑合併：path.join(__dirname,'/xx')  回傳 前後路徑合併 
// 抓檔名： path.basename('/xx/yy/zz.js')  回傳 zz.js 
// 抓副檔名： path.extname('/xx/yy/zz.js')  回傳 js 
// 分析路徑： path.parse('/xx/yy/zz.js') 回傳 上述綜合物件 