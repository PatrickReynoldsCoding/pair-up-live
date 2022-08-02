var mongoose = require('mongoose');
require('dotenv').config();

beforeAll(function (done) {
  mongoose.connect('mongodb://0.0.0.0/pair-up-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    collection.deleteMany();
  }

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('open', function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
