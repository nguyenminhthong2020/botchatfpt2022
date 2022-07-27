require("dotenv").config();
var express = require("express");
var initWebRoute = require("./routes/web");
var cors = require("cors");
var bodyParser = require("body-parser");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);

let port = process.env.PORT || 5002;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});