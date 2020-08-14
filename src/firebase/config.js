  import * as firebase from 'firebase/app';

  import 'firebase/storage';
  import 'firebase/firestore'
  
  var firebaseConfig = {
    apiKey: "AIzaSyDxBWELYNWxgTlDxpNQS1RhfD4LyvPLXDw",
    authDomain: "walley-pics.firebaseapp.com",
    databaseURL: "https://walley-pics.firebaseio.com",
    projectId: "walley-pics",
    storageBucket: "walley-pics.appspot.com",
    messagingSenderId: "385075019052",
    appId: "1:385075019052:web:523cd4c181aa845e1e4089"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const ProjectFirestore = firebase.firestore();

  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,ProjectFirestore,timestamp};