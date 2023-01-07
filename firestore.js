require('dotenv').config();
const admin = require("firebase-admin");

const serviceAccount = require(`./${process.env.FIREBASE_ADMIN_SDK_SECRET_KEY}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const getData = async () => {
  const db = admin.firestore();
  const snapshot = await db.collection('FirstCollection').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
};

getData();
