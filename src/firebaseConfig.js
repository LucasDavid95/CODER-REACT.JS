import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI_Cp2vFCpf9Xb1gsXKCr0PvrkibGL8Qg",
  authDomain: "coder-react-6720f.firebaseapp.com",
  projectId: "coder-react-6720f",
  storageBucket: "coder-react-6720f.appspot.com",
  messagingSenderId: "622705687342",
  appId: "1:622705687342:web:a5705278a3aab82c5c18bf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
