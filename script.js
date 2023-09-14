// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDirAixXEL1rL0BBmxNSN2uTfcRq1NyEaQ",
  authDomain: "menstrula-disposal.firebaseapp.com",
  databaseURL: "https://menstrula-disposal-default-rtdb.firebaseio.com",
  projectId: "menstrula-disposal",
  storageBucket: "menstrula-disposal.appspot.com",
  messagingSenderId: "354026404572",
  appId: "1:354026404572:web:4f77aa4256f5de29491219",
  measurementId: "G-GT0LS3FR3G",
};

firebase.initializeApp(firebaseConfig);

// Reference to the "system" node in your database
var systemRef = firebase.database().ref("system");
// Listen for changes in the "system" node
systemRef.on("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    // Access email and password properties
    var systemData = childSnapshot.val();
    var email = systemData.email;
    var password = systemData.password;

    var status = document.querySelector("status1").innerHTML();
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
