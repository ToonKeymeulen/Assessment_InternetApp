const express = require('express');
//include mongoose module
var MongoClient = require('mongodb').MongoClient;



const app = express();

app.set('view engine', 'pug');

app.get('/',(request, response) => {
  response.render('index')
});


app.listen(3000, () => {
  console.log("listening on port 3000")
});
