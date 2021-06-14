const MongoClient = require("mongodb").MongoClient;
const express = require('express');

const url = "mongodb://localhost:27017/";

const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    next()
});

app.get('/users',
    (request, response) => {
        mongoClient.connect(async function (err, client) {
            const db = await client.db("mydb");
            const collection = db.collection("users");
            const totalUsersCount = await collection.countDocuments();
            console.log(totalUsersCount);
            const leftValue = request.query.currentPage * request.query.count - (request.query.count);
            const portion = request.query.count * 1;
            await collection.find().skip(leftValue).limit(portion).toArray( function (err, results) {
                console.log(results);
                response.send({users: results, totalUsersCount: totalUsersCount});
            });
        });
    });

app.listen(3001);
