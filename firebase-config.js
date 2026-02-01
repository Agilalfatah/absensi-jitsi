// firebase-config.js

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "absensi-jitsi.firebaseapp.com",
  databaseURL: "https://absensi-jitsi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "absensi-jitsi",
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Jadikan database global
window.database = firebase.database();
