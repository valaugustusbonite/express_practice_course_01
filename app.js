// 3rd party packages
const express = require('express');
// admin imports
const adminRoutes = require('./routes/admin');



const app = express();

app.use(express.urlencoded({extended: true})); 

app.use(adminRoutes);

app.use('/', (req, res, next) => {
  //console.log('In the middleWare');
  res.send('<h1>This is Home Page</h1>');
});

app.listen(3000);