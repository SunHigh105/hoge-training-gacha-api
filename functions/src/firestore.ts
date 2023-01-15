const admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const getData = async (categories: Array<string>) => {
  const db = getFirestore();
  const snapshot = await db.collection('videos')
    .where('category', 'in', categories)
    .get();

  const result: Array<any> = [];
  snapshot.forEach((doc: any) => {
    result.push(doc.data());
  });

  return result;
};

module.exports = {
  getData
};
