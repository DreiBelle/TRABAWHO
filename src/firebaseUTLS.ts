// firebaseUtils.js

import firebase from 'firebase/app';
import { dbImage } from './firebaseDB';
import { db } from './firebaseDB';

const storage = firebase.storage();
const db = firebase.firestore();

export async function uploadFile(file) {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(`images/${file.name}`);
  await fileRef.put(file);
  return fileRef.getDownloadURL();
}

export function saveImageUrlToFirestore(imageUrl) {
  return db.collection('images').add({
    imageUrl: imageUrl,
    // Other metadata if needed
  });
}
