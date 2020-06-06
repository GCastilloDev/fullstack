const express = require('express');
const serveStatic = require('serve-static');
//var expressStaticGzip = require("express-static-gzip");
const path = require('path');

const app = express();

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
  console.log('Pagina solicitada');
});



const port = process.env.PORT || 3000;
app.listen(port);
console.log(`app is listening on port: ${port}`);
