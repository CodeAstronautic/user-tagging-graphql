const mongoose = require('mongoose');
const appConfig = require('../config/config.json');

exports.mongoConnection = () => {
  return mongoose.connect(appConfig.database.mongo_url, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
}