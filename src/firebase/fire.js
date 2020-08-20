import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCDTRxj-WkENMSnCFRjlF0FWxQA09gvI0M",
  authDomain: "bookmarks-5b08e.firebaseapp.com",
  databaseURL: "https://bookmarks-5b08e.firebaseio.com",
  projectId: "bookmarks-5b08e",
  storageBucket: "bookmarks-5b08e.appspot.com",
  messagingSenderId: "889472335087",
  appId: "1:889472335087:web:346902e685d42cbbb52f1a",
  measurementId: "G-J5NGWW9H0R",
};
var fire = firebase.initializeApp(config);
export default fire;
