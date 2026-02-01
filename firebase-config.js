<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"></script>

<script>
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "absensi-jitsi.firebaseapp.com",
  databaseURL: "https://absensi-jitsi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "absensi-jitsi",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
</script>
