var firebaseConfig = {
    apiKey: "AIzaSyATDJ9XH2YePhbZplcwlW_BClpZTqvrJWs",
    authDomain: "fir-practice-ae9b8.firebaseapp.com",
    databaseURL: "https://fir-practice-ae9b8-default-rtdb.firebaseio.com",
    projectId: "fir-practice-ae9b8",
    storageBucket: "fir-practice-ae9b8.appspot.com",
    messagingSenderId: "502614754121",
    appId: "1:502614754121:web:d9a1afa3bf756c6c35d098",
    measurementId: "G-MLJLSS1BFC"
  };
  firebase.initializeApp(firebaseConfig);

var username;

function add_username() {
    username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose : "adding user"
    });
}