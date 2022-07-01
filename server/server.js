const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('countriesApp');
        const bookingsCollection = db.collection('countries');
        const bookingsRouter = createRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.error)

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});