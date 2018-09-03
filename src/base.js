import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLLOXth1_IXfNiTobyu-nAWqEiYn5PRDk",
  authDomain: "uvm-events-db.firebaseapp.com",
  databaseURL: "https://uvm-events-db.firebaseio.com",
  projectId: "uvm-events-db",
  storageBucket: "uvm-events-db.appspot.com",
  messagingSenderId: "581780821897"
};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());

export { base };