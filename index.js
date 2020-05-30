var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/naha', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We are connected!");
    // we're connected!
});

var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });