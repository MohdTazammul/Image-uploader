import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import api from "../api";

const firebaseConfig = {
  apiKey: "AIzaSyCtXJIDbSBBjKY6sErtnpG9wdP1DQgL7HA",
  authDomain: "image-uploader-cdb13.firebaseapp.com",
  projectId: "image-uploader-cdb13",
  storageBucket: "image-uploader-cdb13.appspot.com",
  messagingSenderId: "459414576915",
  appId: "1:459414576915:web:8473986d481cb1084a04e6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then(resp=>{
        console.log(resp)
      var obj = {name:resp.user.displayName, email:resp.user.email, profile:resp.user.photoURL};
      let email = obj.email.replace(/[^a-zA-Z0-9 ]/g, '');
      fetch("http://localhost:8080/register").then(resp=>resp.json()).then(resp=>console.log(resp))
    //   api+="/register";
    //   console.log(api+"/register")
    //   fetch("http://localhost:8080/register", {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(obj) 
    //   }).then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
      console.log(email, obj)
})};
