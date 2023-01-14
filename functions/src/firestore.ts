const admin = require("firebase-admin");

const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const getData = async () => {
  const db = admin.firestore();
  const snapshot = (await db.doc('summary/videos').get()).data();
  return Object.values(snapshot);
  // TODO: データ全部取ってからfilterするか？カテゴリごとにデータ取るか？どちらが早いか検証したい
};

module.exports = {
  getData
};
