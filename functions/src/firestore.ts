import admin = require('firebase-admin');
import { getFirestore } from 'firebase-admin/firestore';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const getData = async (categories: Array<string>) => {
  const db = getFirestore();
  const snapshot = await db
    .collection('videos')
    .where('category', 'in', categories)
    .get();

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const result: Array<any> = [];
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  snapshot.forEach((doc: any) => {
    result.push(doc.data());
  });

  return result;
};
