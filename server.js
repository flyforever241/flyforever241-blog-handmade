var express = require("express");
var app = express();
app.use('/', express.static('.'));
app.listen(2937);
console.log("The app is listening http://localhost:2937/.");