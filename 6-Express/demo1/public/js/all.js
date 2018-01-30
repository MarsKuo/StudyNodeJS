var send = document.getElementById('send');
var content = document.getElementById('content');

send.addEventListener('click', function (e) {
  e.preventDefault();
  var str = content.value;
  console.log(str);



  //AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('post', '/searchAJAX');
  //xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
  xhr.setRequestHeader("content-type", "application/json");
  // var data = 'content' + str;
  var data = JSON.stringify({ 'content': str })
  xhr.send(data);
  xhr.onload = function () {
    console.log(xhr.responseText);
  }
})