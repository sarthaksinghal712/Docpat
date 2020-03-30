// $(document).ready(function(){
//     var userId = firebase.auth().currentUser.uid;
//     return firebase.database().ref('/users/' + userId + 'patients/').once('value').then(function(snapshot) {
//         var patients = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
//     $("#Submit").click(function(){
//         name = $("#name").val();
//         tel = $("#tel").val();
//         email = $("#email").val();
//         bg = $("#bg").val();
//         height = $("#height").val();
//         weight = $("#weight").val();
//         datec = $("#datec").val();
//         datef = $("#datef").val();
//         dict = {name: name, tel: tel, email: email, blood_group: bg, height: height, weight: weight, date_checkup: datec, date_followup: datef}
//     });
// })
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
    $("#boxx").hide();
    $("#content").show()
    document.getElementById("gr").innerHTML = user.displayName;
    document.getElementById("gr1").innerHTML = user.uid;
    // init()
}

function logout(){
    firebase.auth().signOut().then(function() {
        $("#logout").hide();
        $("#login").show();
      }, function(error) {
        alert("Err... Error");
      });
}


//     function writeUserData(a) {
//         firebase.database().ref('users/' + a + '/patients').set({
//           patients: "[]",
//         });
//       }
// }
// function init(){
//     uid = $("#gr1").text();
//     const usersRef = db.collection('users').doc(uid)
//     usersRef.get().then((docSnapshot) => {
//     if (!docSnapshot.exists) {
//     var db = firebase.firestore();
//     db.collection("users").doc(uid).collection("patients").set({
//         patients: "[]",
//     });
//     }
//     })
// }

