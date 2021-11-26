import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC26xdhlU1b0q6im8Bs68thVYz9uz2n_M4",
    authDomain: "gamification-eebb8.firebaseapp.com",
    projectId: "gamification-eebb8",
    storageBucket: "gamification-eebb8.appspot.com",
    messagingSenderId: "498635385387",
    appId: "1:498635385387:web:99631ca2026e7d44b1d86e",
    measurementId: "G-7X9VRWV87N"
  };

  const firebase = firebase.initializeApp (firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db= firebaseApp.firestore()

  export {auth, provider};
  export default db;