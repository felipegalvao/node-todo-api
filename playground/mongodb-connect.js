const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc in Users collection (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Felipe',
    //     age: 31,
    //     location: 'Rio de Janeiro'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('unable to insert User', err);
    //     }

    //     console.log(result.ops[0]._id);
    // })

    db.close();
});