const PORT=3333;

let express = require("express");
let app = express();
let apiEndpoints = require("./api-endpoints")
let mongoose = require('mongoose');
let cors = require("cors");
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

if (!db) {
	console.log("Error connecting to db");
} else { 
	console.log("Db connected succesfully");
}


app.get("/", (request, response) => response.send("WASSUP"));

app.use('/api', apiEndpoints);

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

