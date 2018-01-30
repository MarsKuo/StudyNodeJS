var data= 2;


//module.exports = data;

// module.exports = {
//   content: data,
//   title: 'aaaa',
//   bark: function(){
//     return 'bark!!!';
//   }
// }

// 等同於，只能二擇一，下面的優先，會蓋掉上面的，不能混用

exports.data = 2
exports.title = 'aaaa'
exports.bark = function(){
  return 'bark!!!';
};