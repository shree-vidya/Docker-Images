const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Image 2 Route 1');
});

app.get('/abc', (req, res) => {
    res.send('Hello World from Image 2 Route 2');
  });

var port = 8080;
app.listen(port, function () {
  console.log("Server 2 Has Started!");
})