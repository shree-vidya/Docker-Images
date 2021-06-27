const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Image 1 Route 1');
});

app.get('/abc', (req, res) => {
    res.send('Hello World from Image 1 Route 2');
  });

var port = 5000;
app.listen(port, function () {
  console.log("Server 1 Has Started!");
})