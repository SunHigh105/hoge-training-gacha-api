require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(
  port,
  () => {
    console.log(`Listening on port ${port}`);
  }
);

app.get('/', (req, res) => {
  res.send('Simple REST API');
});

// app.get('/hoge', (req, res) => {
//   res.send('Simple REST API hoge');
// });
