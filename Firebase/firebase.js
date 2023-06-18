var firebase = require('firebase')


module.exports.Database = function getFirebaseConnection(){
// TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_KEY,
        authDomain: "downloads-61f29.RE.com",
        projectId: "downloads-61f29",
        storageBucket: "downloads-61f29.appspot.com",
        messagingSenderId: "574731758363",
        appId: "1:574731758363:web:dc1fd4a1bfcc4e2de201be",
        measurementId: "G-7DKZYJ9TLW"
    };
  
  
  firebase.initializeApp(firebaseConfig)
  let database = firebase.database()
  
  console.log(databasssse)
  return database;

} 