const mongoose = require('mongoose');
const constants = require('./constants')

mongoose.connect(dbLink(), { useNewUrlParser: true });
mongoose.set('debug', constants.mongooseDebug);
mongoose.set('useCreateIndex', true);
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Db successfully connected')
});

function dbLink() {
  if (constants.dbUser || constants.dbPassword) {
    return ('mongodb://' + constants.dbUser + ':' + constants.dbPassword + '@' + constants.dbHost + ':' + constants.dbPort) + '/' + constants.dbName
  } else {
    return ('mongodb://' + constants.dbHost + ':' + constants.dbPort) + '/' + constants.dbName
  }
}