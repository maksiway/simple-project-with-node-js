var exec = require("child_process").exec; //не блокирующий процесс

function start(response) {
  console.log("Request handler 'start' was called.");
/*
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  
  sleep(10000); //вызов блокирующей функции(Node-js - однопоточная среда)
  return "Hello Start";
*/

 /*****вызов неблокирующего процесса, но он не работает, т.к. использует  callback function вместо return****/
 // var content = "empty";
  
  exec("find /", { timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) { //асинхронная функция с stdout - function callback
    //content = stdout;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
  //return content; //синхронный возврат результата
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
    //return "Hello Upload";
}

exports.start = start;
exports.upload = upload;