
var firebaseConfig = {
      apiKey: "AIzaSyDI_3dmoJ5WZCwz1ARm9Ml0sDLdiTQTiis",
      authDomain: "kwitter-e2f2e.firebaseapp.com",
      databaseURL: "https://kwitter-e2f2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2f2e",
      storageBucket: "kwitter-e2f2e.appspot.com",
      messagingSenderId: "393710673058",
      appId: "1:393710673058:web:54f885464d0fa5bfa00bfb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
