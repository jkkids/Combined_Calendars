'use strict'

// Libraries
const path = require('path');
const express = require('express');
const logger = require('morgan');
const app = express();

// Asset setup, use to serve front-end
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + "/views")));

// Port and Logger setup
const port = process.env.PORT || 3000;
app.use(logger("dev"));


// CORS setup
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if(req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
		return res.status(200).json({});
	}
	next();
});

// Routes
app.use('/', require("./routes.js"))

// Catch 404 and pass to Error Handler
app.use(function(req, res, next){
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Error Handler
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.send("404 Not Found")
});

// Start the server
app.listen(port, () => {
  console.log("magic happens on port ", port);
})
