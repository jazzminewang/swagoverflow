import firebase from 'firebase';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBchUfiyzK0xuv1FWRtq00boHFs-xy_d0g",
  authDomain: "swagoverflow-ce166.firebaseapp.com",
  databaseURL: "https://swagoverflow-ce166.firebaseio.com",
  projectId: "swagoverflow-ce166",
  storageBucket: "swagoverflow-ce166.appspot.com",
  messagingSenderId: "1034769991883"
};
var fire = firebase.initializeApp(config);
export default fire;