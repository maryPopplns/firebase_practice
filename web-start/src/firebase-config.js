// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: 'AIzaSyBGGA2RN1obLbOL6C5shU6HoLMbeVTTlt8',
  authDomain: 'friendlychat-35fbe.firebaseapp.com',
  projectId: 'friendlychat-35fbe',
  storageBucket: 'friendlychat-35fbe.appspot.com',
  messagingSenderId: '625783316577',
  appId: '1:625783316577:web:f3668ed6eb06b1169c8a20',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

const app = initializeApp(config);
