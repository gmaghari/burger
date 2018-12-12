var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3560;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use("/", burgers_controller);
app.use("/update", burgers_controller);
app.use("/create", burgers_controller);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});