var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3560;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());