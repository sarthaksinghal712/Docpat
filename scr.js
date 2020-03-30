var firebaseConfig = {
    apiKey: "AIzaSyAZHA9TVmku44tbMATQBJ1YYumoGYd6gsI",
    authDomain: "doctorassistproj.firebaseapp.com",
    databaseURL: "https://doctorassistproj.firebaseio.com",
    projectId: "doctorassistproj",
    storageBucket: "doctorassistproj.appspot.com",
    messagingSenderId: "644814831886",
    appId: "1:644814831886:web:be1ebd79a54d4e0740175f",
    measurementId: "G-K512TL30F0"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

function upd(){
    n = $("#numcl").val();
    $('#numcl').attr('disabled', 'disabled'); 
    if(n == 1){
    }
}
function login(){
    function newLoginHappened(user){
        if(user){
            app(user);

        } else{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);

}
function app(user){
    $("#login").hide();
    $("#logout").show()
    $("#text").show();
    document.getElementById("userName").innerHTML = user.displayName;
    document.getElementById("uname").innerHTML = user.displayName;
    document.getElementById("uid").innerHTML = user.uid;
    document.getElementById("uid1").innerHTML = user.uid;
    document.getElementById("uidd").innerHTML = user.displayName;
}

function logout(){
    firebase.auth().signOut().then(function() {
        $("#logout").hide();
        $("#login").show();
        window.location.assign("setup.html");
      }, function(error) {
        alert("Err... Error");
      });
}

function sprofile(){
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sprofile");

// Get the <span> element that closes the modal
var span = document.getElementById("cl1");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function sprof(){
    uid = $("#uid1").text();
    const usersRef = db.collection('users').doc(uid)
    usersRef.get().then((docSnapshot) => {
    var db = firebase.firestore();
    usersRef.set({
        Name: $("#name").val(),
        Contact: $("#num").val(),
        Address: $("#add").val(),
        Specialization: $("#sp").val(),
    });
    })

}
function sclinic(){
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("sclinic");

// Get the <span> element that closes the modal
var span = document.getElementById("cl2");

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}
}

function scli(){
  uid = $("#uid1").text();
  const usersRef = db.collection('users').doc(uid).collection("Clinics").doc("Clinic 1")
  usersRef.get().then((docSnapshot) => {
  var db = firebase.firestore();
  usersRef.set({
      Name: $("#cname").val(),
      Address: $("#cadd").val(),
      Timings: $("#ctime").val(),
      Telephone: $("#ctel").val(),
  });
  })

}
function scli1(){
  uid = $("#uid1").text();
  const usersRef = db.collection('users').doc(uid).collection("Clinics").doc("Clinic 2")
  usersRef.get().then((docSnapshot) => {
  var db = firebase.firestore();
  usersRef.set({
      Name: $("#cname1").val(),
      Address: $("#cadd1").val(),
      Timings: $("#ctime1").val(),
      Telephone: $("#ctel1").val(),
  });
  })

}