const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){
    const db = client.db("mydb");
    const collection = db.collection("users");

    collection.find().toArray(function(err, results){
        console.log(results);
        client.close();
    });
});