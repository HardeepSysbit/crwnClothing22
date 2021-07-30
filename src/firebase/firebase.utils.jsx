import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyA4ILRv5OaGO6X62NTEYSdjATswX6R3lcQ",
    authDomain: "crwndb-aacb7.firebaseapp.com",
    projectId: "crwndb-aacb7",
    storageBucket: "crwndb-aacb7.appspot.com",
    messagingSenderId: "259293819177",
    appId: "1:259293819177:web:ffe221f3524c221912c738",
    measurementId: "G-3W6YVZ0GFJ"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth() ;
  export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider() 
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 