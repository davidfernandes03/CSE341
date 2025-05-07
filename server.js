const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;
const mongodb = require("./DB/connection");
 
app.use('/', require('./routes'));
 
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(Port);
    console.log(`Connected to DB and listening on ${Port}`);
  }
});