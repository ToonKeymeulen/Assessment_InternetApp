const express = require('express');

const mongoose = require(‘mongoose’);
mongoose.connect(‘mongodb+srv://pasta123:pasta123@pastapacket.pz52b.mongodb.net/<dbname>?retryWrites=true&w=majority’, () => {
   console.log(‘Connected to Mongo DB Successfully!!’);
})


main().catch(console.error);


app.set('view engine', 'pug');

app.get('/',(request, response) => {
  response.render('index')
});


app.listen(3000, () => {
  console.log("listening on port 3000")
});
