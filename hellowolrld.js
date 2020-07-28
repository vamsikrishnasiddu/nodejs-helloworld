var http = require('http');
http.createServer(function(request,response){
    
    response.writeHead(200);        //status code in the header
    response.write('hellowolrd');    //response body
    setTimeout(() => {
        response.write("Helloworld is done");
        response.end();                  //close the connection 
    }, 5000);
       
}).listen(8080);                      //listen for connection on the port 8080
console.log("listening on 8080");