
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCrVgoKTOXoUYr_1wyKUXmzIRGGjjj3tPs",
      authDomain: "project-93-d6a94.firebaseapp.com",
      databaseURL: "https://project-93-d6a94-default-rtdb.firebaseio.com",
      projectId: "project-93-d6a94",
      storageBucket: "project-93-d6a94.appspot.com",
      messagingSenderId: "607834104684",
      appId: "1:607834104684:web:bc2f20984b4bf088ad4949"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     
    user_name= localStorage.getItem("user_name");
     document.getElementById("welcome").innerHTML="Welcome "+user_name + "!";



         

      



function add_room(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding roomname"});
      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row="<div class='room_name' id=" + Room_names+ " onclick='redirect_page(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirect_page(a)
{
console.log(a);
localStorage.setItem("room_name",a);
window.location="chat_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}