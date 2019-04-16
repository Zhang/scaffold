const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('App listening on 3000');
});

app.get('/testroute', (req, res) => {
  res.send('this is working now and it is again');
});
