var nameSignUp = document.getElementById("nameSignUp");
var emailSignUp = document.getElementById("emailSignUp");
var passwordSignUp = document.getElementById("passwordSignUp");
var emailSignIn = document.getElementById("emailSignIn");
var passwordSignIn = document.getElementById("passwordSignIn");
var linkTag = document.getElementById("linkTag");
var signUpBtn = document.getElementById("signUpBtn");
var userName;

var arraySignUp = [];
if (localStorage.getItem("users") != null) {
  arraySignUp = JSON.parse(localStorage.getItem("users"));
}
// isEmpty
function isEmpty() {
  if (nameSignUp.value == "" || emailSignUp == "" || passwordSignUp == "") {
    return false;
  } else {
    return true;
  }
}
// existEmail
function existEmail() {
  for (var i = 0; i < arraySignUp.length; i++) {
    if (
      arraySignUp[i].emailSignUp.toLowerCase() ==
      emailSignUp.value.toLowerCase()
    ) {
      return false;
    }
  }
}
// signUp
function signUp() {
  if (isEmpty() != false) {
    var signUpInput = {
      nameSignUp: nameSignUp.value,
      emailSignUp: emailSignUp.value,
      passwordSignUp: passwordSignUp.value,
    };
  } else {
    document.getElementById("view").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  if (arraySignUp.length == 0) {
    arraySignUp.push(signUpInput);
    localStorage.setItem("users", JSON.stringify(arraySignUp));
    document.getElementById("view").innerHTML =
      '<span class="text-success m-3">Success</span>';
    return true;
  }
  if (existEmail() == false) {
    document.getElementById("view").innerHTML =
      '<span class="text-danger m-3">email already exists</span>';
  } else {
    arraySignUp.push(signUpInput);
    localStorage.setItem("users", JSON.stringify(arraySignUp));
    document.getElementById("view").innerHTML =
      '<span class="text-success m-3">Success</span>';
  }
}
// loginCheck
linkTag.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailSignIn.value == "" || passwordSignIn == "") {
    document.getElementById("view").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  for (var i = 0; i < arraySignUp.length; i++) {
    if (
      emailSignIn.value.toLowerCase() == arraySignUp[i].emailSignUp && // 0 bbb
      passwordSignIn.value == arraySignUp[i].passwordSignUp // 0 bbb
    ) {
      userName = arraySignUp[i].nameSignUp; //bbb
      localStorage.setItem("userName", userName);
      console.log(userName);
      window.location.href = this.href;
      document.getElementById("view").innerHTML =
        '<span class="text-success m-3">Success</span>';
      return;
    } else if (
      emailSignIn.value.toLowerCase() !== arraySignUp[i].emailSignUp &&
      passwordSignIn.value !== arraySignUp[i].passwordSignUp
    ) {
      document.getElementById("view").innerHTML =
        '<span class="text-danger m-3">incorrect email or password</span>';
      
    } else if (
      emailSignIn.value.length == 0 ||
      passwordSignIn.value.length == 0
    ) {
      document.getElementById("view").innerHTML =
        '<span class="text-danger m-3">All inputs is required</span>';
      return;
    }
  }
});
