function singInWithGoogle() {
  // Using a popup.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      console.log(result)
      // This gives you a Google Access Token.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var email = result.user.email;
      // var photo = result.additionalUserInfo.profile.picture;
      // document.getElementById("google-email").innerHTML = email;
      // document.getElementById("google-pic").src = photo;
      window.location.href = "/main.html";
    })
    .catch(function (error) {
      console.log(error)
    })
}

function createUserWithEmailAndPassword(email, password) {

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      window.location.href = "/main.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

function signInWithEmailAndPassword(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "/main.html";
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}


