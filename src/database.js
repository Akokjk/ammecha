var mongoose = require('mongoose');
const {db_link} = require('./secerts.js');

mongoose.set('useCreateIndex', true);
mongoose.Promose = global.Promise;
mongoose.connect(db_link, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(e) {
  if(e) return console.log("Unable to connect.\n");
  console.log("successful connection to database.");
});

module.exports = {
	mongoose
}
