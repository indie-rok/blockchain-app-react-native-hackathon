import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBv2DfO7Xq0UMTi0oMvSijPrxqxC0zorJY",
    authDomain: "better-office-stagging.firebaseapp.com",
    databaseURL: "https://better-office-stagging.firebaseio.com",
    projectId: "better-office-stagging",
    storageBucket: "better-office-stagging.appspot.com",
    messagingSenderId: "1078328598191",
    appId: "1:1078328598191:web:7d352a9e8c59b93ba83e5a",
    measurementId: "G-D97PD5YQ7K"
  };
  
  // Initialize Firebase
  export default initializeApp(firebaseConfig);