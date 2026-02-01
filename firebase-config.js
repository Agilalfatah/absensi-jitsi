// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCNJp26_wvTHIK7e1g78A2ndEGVrWp_v5Y",
  authDomain: "absensi-jitsi.firebaseapp.com",
  databaseURL: "https://absensi-jitsi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "absensi-jitsi",
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Jadikan database global
window.database = firebase.database();
