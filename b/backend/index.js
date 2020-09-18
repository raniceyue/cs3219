const PORT=8000;

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

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://cs3219-assignment-b:cs3219b@cluster0.orruv.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri, { useNewUrlParser: true});

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

