let btnGo = document.querySelector(".btnGo");
let btnLight = document.querySelector(".btnLight");
let btnDark = document.querySelector(".btnDark");
let body = document.querySelector(".body");

let darkMode = localStorage.getItem("darkMode") || "light";

if (darkMode == "dark") {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
if (darkMode == "light") {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
btnLight.onclick = () => {
  localStorage.setItem("darkMode", "light");
  let darkMode = localStorage.getItem("darkMode") || "light";
  if (darkMode == "light") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};
btnDark.onclick = () => {
  localStorage.setItem("darkMode", "dark");
  let darkMode = localStorage.getItem("darkMode") || "light";
  if (darkMode == "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
};
// btnGo.onclick = () =>{
//     if(fullName){
//         window.location.href="./index2.html"
//     }
//     else{
//         window.location.href="./login.html"
//     }
// }
