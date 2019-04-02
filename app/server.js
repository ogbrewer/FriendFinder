const express = require("express");
const path= require("path")
const app = express();
const PORT = process.env.PORT || 8080;


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// you can use this to server static 
// files from the public folder
app.use(express.static('public'));
