var exec = require("child_process").exec; //не блокирующий процесс

function start() {
  console.log("Request handler 'start' was called.");

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  
 // sleep(10000); //вызов блокирующей функции(Node-js - однопоточная среда)
 // return "Hello Start";
 /*****вызов неблокирующего процесса, но он не работает, т.к. использует  callback function вместо return****/
  var content = "empty";
  
  exec("ls-lah", function (error, stdout, stderr) { //асинхронная функция с stdout - function callback
    content = stdout;
  });
  
  return content; //синхронный возврат результата
}

function upload() {
    console.log("Request handler 'upload' was called.");
     return "Hello Upload";
}

exports.start = start;
exports.upload = upload;