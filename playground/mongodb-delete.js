const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: "another stuff to do"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "walk the dog"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    // db.close();
});