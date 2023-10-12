var db = require('odbc') ();
var app = require('express')(), databaseINFO = 'DRIVER=(FreeTDS);SERVER=host;UID=admin;PWD=admin;DATABASE=artistDB';
;
db.openSync(databaseINFO);
app.get('/requrireUserDetail', function (req, res) {
//var fs = require("fs");
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//      db.openSync();
//      console.log( data );
//      res.end( data );
//   });
//});

   db.prepare("SELECT * FROM  USERINFO", function (err,msg) {
     if(err) {
        console.log(err);
        return db.closeSync();
     }
  // msg
  //
  //
   });
  db.closeSync();
});

app.post('/requireAuth', function(req,res) {
   //
})




var server = app.listen(88, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("ArtisanServer running at http://%s, port is %s", host, port)
})
