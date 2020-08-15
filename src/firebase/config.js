  import * as firebase from 'firebase/app';

  import 'firebase/storage';
  import 'firebase/firestore'
  
  var firebaseConfig = {
 // use your own firebase api key.
 // create project in firebase and copy api key from console.
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const ProjectFirestore = firebase.firestore();

  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,ProjectFirestore,timestamp};