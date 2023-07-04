var firebaseConfig = {
      apiKey: "AIzaSyByXiCAdP1HMJ61wl1cnxrKJBNNQwTp-E4",
      authDomain: "kwitter-9ddf7.firebaseapp.com",
      databaseURL: "https://kwitter-9ddf7-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ddf7",
      storageBucket: "kwitter-9ddf7.appspot.com",
      messagingSenderId: "435458200503",
      appId: "1:435458200503:web:6d2e93ecfdd6988f760e32"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
