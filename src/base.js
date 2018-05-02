import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkdIMU4nXy9l4gOrpN9Ns855O_UFwnZbM",
    authDomain: "battlemaster-fb7c5.firebaseapp.com",
    databaseURL: "https://battlemaster-fb7c5.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
