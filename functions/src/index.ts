import * as functions from "firebase-functions";

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: process.env.CLIENT_BASE_URL,
  credentials: true,
  optionsSuccessStatus: 200
}));

const firestore = require('./firestore');

app.get('/', (res: any) => {
  res.send('Simple REST API');
});

app.get('/menus', async (req: any, res: any) => {
  const response = await firestore.getData();
  res.json(response);
});

exports.app = functions
  .https
  .onRequest(app);
