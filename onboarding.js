// var user = firebase.auth().currentUser;
// var firstname = document.getElementById('first-name').value;
// var lastname = document.getElementById('last-name').value;
// var email = document.getElementById('email').value;
// var password1 = document.getElementById('first-pw');
// var password2 = document.getElementById('second-pw');
// var password;

function test(){
  var firstname = document.getElementById('first-name').value;
  var lastname = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  console.log(firstname);
  console.log(lastname);
  console.log(email);
}

function setPassword(){
  var password1 = document.getElementById('first-pw').value;
  var password2 = document.getElementById('second-pw').value;
  var password;
  console.log(password1);
  console.log(password2);
  if(password1==password2 && password1.length>5 && password2.length>5){
    alert('Password set!');
  }
  else if(password1==password2 && (password1.length<=5 || password2.length<=5)){
    alert('Password must be at least 6 characters long');
  }
  else {
   alert('Passwords do not match');
  }
}

function updateProfile(){
  console.log(user);
  user.updateProfile({
    displayName: firstname + " " + lastname,
  });
  console.log(displayName);
};
