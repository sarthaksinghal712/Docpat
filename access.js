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
document.getElementById("UN").innerHTML = user.displayName;
document.getElementById("uu").innerHTML = user.displayName.split(" ")[0];
var userId = firebase.auth().currentUser.uid;
var docRef = db.collection("users").doc(userId).collection("Clinics").doc("Clinic 1");
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        $("#cl1").text(doc.data()["Name"])
    } else {
        console.log("No clinics found, please complete the setup!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
var docRef1 = db.collection("users").doc(userId).collection("Clinics").doc("Clinic 2");
docRef1.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        $("#cl2").text(doc.data()["Name"])
    } else {
        console.log("No clinics found, please complete the setup!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}

function logout(){
firebase.auth().signOut().then(function() {
$("#logout").hide();
$("#login").show();
}, function(error) {
alert("Err... Error");
});
}


