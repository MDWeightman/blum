import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOHr3T1Q_4kM920EOMuPmfRHJr05M3ugs",
  authDomain: "blum-9bb78.firebaseapp.com",
  databaseURL: "https://blum-9bb78.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;