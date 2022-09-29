var firebaseConfig = {
    apiKey: "AIzaSyBQZJzkBDi6CM_G-7ONTWtcdL3j8DcjzTM",
    authDomain: "kwitter-9996b.firebaseapp.com",
    databaseURL: "https://kwitter-9996b-default-rtdb.firebaseio.com",
    projectId: "kwitter-9996b",
    storageBucket: "kwitter-9996b.appspot.com",
    messagingSenderId: "1022014625060",
    appId: "1:1022014625060:web:cd466a4538505431788fb1"
};

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) { snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;

                }
          });
    });
}
getData();

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 



function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

console.log(event);

content = event.results[0][0].transcript; 
console.log(content);

document.getElementById("textbox").innerHTML = content;


if(content != ""){
    speak();
}

}

function speak(){
    var texttospeech = window.speechSynthesis;
    var audiofile = new SpeechSynthesisUtterance(content);

    texttospeech.speak(audiofile);
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("room");
    window.location = "index.html";
}