
function facebookSignin() {
	//body.. 
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('email, user_birthday');
	firebase.auth().useDeviceLanguage();

	firebase.auth().sigInWithPopup(provider)
	.then(function(result)
	{
      var token = result.credential.accessToken;

      document.querySelector('#signout').style.display = "block";
      console.log(user);
      var user = result.user;     
      console.log(user.email);

      var userImage = document.querySelector("#user-image");

      var userpic = document.createElement("img");
      userpic.src = user.photoURL;
      userImage.append(userpic);

      var useremail = document.querySelector("#user-email");
      useremail.innerHTML = user.email;

	});
}
function facebookSignout()() {
   firebase.auth().signOut()
   
   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}