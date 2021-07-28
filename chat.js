function login(){
    
    var username= document.getElementById("user_login").value;
    localStorage.setItem("user_name",username);
    window.location="chat_room.html";
}