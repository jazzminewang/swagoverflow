import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBchUfiyzK0xuv1FWRtq00boHFs-xy_d0g",
  authDomain: "swagoverflow-be166.firebaseapp.com",
  databaseURL: "https://swagoverflow-be664.firebaseio.com/",
  projectId: "swagoverflow-be166",
  storageBucket: "gs://swagoverflow-be664.appspot.com",
  messagingSenderId: "1034769991883"
};

var fire = firebase.initializeApp(config);

export default fire;