import { getDatabase, ref, onValue } from "firebase/database";
import {db} from './firebase-config';

const postsRef = ref(db, 'server/saving-data/fireblog/posts');

// Function to fetch posts from Firebase
export function fetchPosts(callback) {
  onValue(postsRef, (snapshot) => {
    const data = snapshot.val();
    callback(data); // Pass the data to the callback function
  }, (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  });
}