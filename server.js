var express = require('express');
var app = express();
var port = process.env.PORT || 3003;
app.use(express.static(__dirname));
app.listen(port, 'localhost',function() {
	console.log('Webserver has been started at the port: '+ port)
});