// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAytiZhPAnKBySnf2Gp0j8S8VWur4ma5MI",
  authDomain: "simplosophies.firebaseapp.com",
  projectId: "simplosophies",
  storageBucket: "simplosophies.appspot.com",
  messagingSenderId: "619888174382",
  appId: "1:619888174382:web:322a42d22667f1377686bf",
  measurementId: "G-8YJV1SKGP1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initialNewBlogData = {
  title: '',
  article: '',
  image: '',
  footnote: '',
  category: '',
}