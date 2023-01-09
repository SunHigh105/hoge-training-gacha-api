const admin = require("firebase-admin");

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const getData = async () => {
  const db = admin.firestore();
  const snapshot = await db.collection('videos').get();
  const result = [];
  snapshot.forEach((doc) => {
    // console.log(doc.id, '=>', doc.data());
    result.push(doc.data());
  });
  // return snapshot.map(doc => {
  //   return doc.data();
  // });
  return result;
};

module.exports = {
  getData
};
