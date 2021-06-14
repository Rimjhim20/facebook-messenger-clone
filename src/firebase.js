import firebase from "firebase";
const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyAfoarPv-ZdSOZD152stwTNBMOlN-NyQE0",
    authDomain: "facebook-messenger-clone-764da.firebaseapp.com",
    projectId: "facebook-messenger-clone-764da",
    storageBucket: "facebook-messenger-clone-764da.appspot.com",
    messagingSenderId: "692569219139",
    appId: "1:692569219139:web:89e7db18ad7fe0b180f4f6",
    measurementId: "G-VDYHRDGW1Q"
  });

  const db = firebaseApp.firestore();
  export {db};