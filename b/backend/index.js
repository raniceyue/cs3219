// Express
let express = require("express");
let app = express();
let apiEndpoints = require("./api-endpoints")

// MongoDB 
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

if (!db) {
	console.log("Error connecting to db");
} else { 
	console.log("Db connected succesfully");
}

const PORT=3333;

app.get("/", (request, response) => response.send("WASSUP"));

app.put("/", (request,response) => response.send("U just put something"));

app.post("/", (request,response) => response.send("U just posted something"));

app.delete("/", (request, response) => response.send("U just deleted something"));

app.use('/api', apiEndpoints);

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

