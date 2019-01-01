//Requirments
const https = require('https'); //protocol the server works on
const http = require('http'); //for dev use
const fs = require('fs'); //file system
const hbs = require('hbs'); //handlebars html templating
const express = require('express'); //allows to create the web app
const bodyParser = require("body-parser"); //parse body req's
const {secert, options} = require("./secerts"); //NOT To BE ADDED TO GITHUB
const cookieParser = require('cookie-parser'); //parse cookies
const _ = require("lodash"); //nice for formating json
const {mongoose} = require("./database"); //overhead for mongodb


//Configuration
const app = express(); //create routes
//const server = https.createServer(options, app); //production
const server = http.createServer(app); //dev
server.listen(443); //https
app.use(cookieParser(secert)); // this needs to put into secerts
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
hbs.registerPartials(__dirname + '/views/partials');
app.set("view_engine", "hbs");

//TOOD::CREATE a homepage

app.get("/", (req, res) => {
  res.send("Hello");
})
