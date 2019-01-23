var http = require("http");

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var url=req.url;
  if(url==="/"){
    res.write("<a href='http://localhost:2005/login'><button>Login</button></a> <br/>");
    res.write("<a href='http://localhost:2005/createaccount'>Create Account<button</a> <br/>  ");

  }

  if(url==="/login"){
    res.write("<form action='http://localhost:8081/api/insert' method='POST'>" +

        "<input type='text' name='username' placeholder='Username'>" +
        "<input type='text' name='password' placeholder='Password'>" +
        "<input type='submit' value='Login'>"
            );
  }

  if(url==="/createaccount"){
    res.write("<form action='http://localhost:8081/email/createaccount' method='POST'>" +

        "<input type='text' name='username' placeholder='Username'>" +
        "<input type='text' name='password' placeholder='Password'>" +
        "<input type='submit' value='Sign Up'>"
            );
  }

  if(url==="/alvin"){
    res.write("<h1>BOOM!!!!!</h1>");
  }
  res.end();

});
server.listen(2005);
