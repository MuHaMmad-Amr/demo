var userDiv = document.getElementById("userName");
console.log(userDiv);
var name = localStorage.getItem("userName");
userDiv.innerHTML += `<span>${name}</span>`;

var logOut = document.getElementById("logOut");
logOut.addEventListener("click", function () {
  localStorage.removeItem("userName");
  
});
