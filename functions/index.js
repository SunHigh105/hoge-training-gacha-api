const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  // origin: process.env.FRONT_BASE_URL,
  origin: 'http://127.0.0.1:5000',
  credentials: true,
  optionsSuccessStatus: 200
}))

// const port = process.env.PORT || 3000;
// app.listen(
//   port,
//   () => {
//     console.log(`Listening on port ${port}`);
//   }
// );

const firestore = require('./firestore');

app.get('/', (req, res) => {
  res.send('Simple REST API');
});

app.get('/menus', async (req, res) => {
  const response = await firestore.getData();
  res.json(response);
});

exports.app = functions
  // .runWith({
  //   secrets: ['FRONT_BASE_URL', 'FIREBASE_ADMIN_SDK_SECRET_KEY']
  // })
  .https
  .onRequest(app);
