//YOUR FIREBASE LINKS
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
    username = localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


    function send(){
          if (document.getElementById("msg").value == ""){
                window.alert("Type Something First")
          }
          else{
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";}
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

      console.log(firebase_message_id,message_data);
      console.log(message_data);

      name=message_data["name"];
      message = message_data["message"];
      like = message_data["like"];

      tag_1 = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      tag_2 = "<h4 class='message_h4'>"+message+"</h4>";
      tag_3 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
      tag_4 = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+" </span> </button><hr>";

      row= tag_1+tag_2+tag_3+tag_4;
      document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function update_like(message_id){
      console.log("Clicked On the Like Button:"+message_id);
      likes=document.getElementById(message_id).value;
      updated_likes= Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}