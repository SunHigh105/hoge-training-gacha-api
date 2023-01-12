const admin = require("firebase-admin");

const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

interface Training {
  category: string,
  channelId: string,
  minute: string,
  thumbnail: string,
  title: string,
  url: string,
  videoId: string,
}

const getData = async () => {
  const db = admin.firestore();
  const snapshot = (await db.doc('summary/videos').get()).data();
  const trainingList: Array<Training> = Object.values(snapshot);
  
  // TODO: データ全部取ってからfilterするか？カテゴリにデータ取るか？どちらが早いか検証したい
  
  const abs = trainingList.filter((training: Training) => {
    return training.category === '腹筋' && Number(training.minute) < 5;
  })[0];

  // const back = trainingList.filter(training => {
  //   return training.category === '背中' && training.minute < 5;
  // })[0];

  // const hip = trainingList.filter(training => {
  //   return training.category === '尻' && training.minute < 5;
  // })[0];

  // const hiit = trainingList.filter(training => {
  //   return training.category === 'HIIT' && training.minute < 5;
  // })[0];

  const menus = [abs];
  
  return menus;
};

module.exports = {
  getData
};
