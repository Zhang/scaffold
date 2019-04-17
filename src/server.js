const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// const connection = require('./connection.js');

const multer = require('multer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('App listening on 3000');
});

const dest = path.join(__dirname, './images');

const upload = multer({
  dest,
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

// Found an NPM package to handle the receiving and writing of image files
// Abandoned this quickly to focus on building client and UI because package
// was unfamiliar and I started running into some challenging errors

app.post('/upload', upload.single('file'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = `${dest}/image.jpeg`;

  if (path.extname(req.file.originalname).toLowerCase() === '.jpeg') {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType('text/plain')
        .end('File uploaded!');
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType('text/plain')
        .end('Only .jpeg files are allowed!');
    });
  }
});
