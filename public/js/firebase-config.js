import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyeKEds4T_WBhO5-yoWmnX-PUWNZILpDc",
  authDomain: "portfolio-280214.firebaseapp.com",
  projectId: "portfolio-280214",
  storageBucket: "portfolio-280214.appspot.com",
  messagingSenderId: "867205983706",
  appId: "1:867205983706:web:1a2beaf61957aa6d0464e3",
  measurementId: "G-KCM99R4E9P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
