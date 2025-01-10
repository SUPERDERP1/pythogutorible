// js code sucks
let screens = 0;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


const errorMessage = document.getElementById("errorMessage");
       
errorMessage.style.color = "red";
console.log("submitted");
       
        
console.log("success");
errorMessage.style.color = "green";
errorMessage.textContent = "Success! Next up: placeholder";
screens += 1;
setTimeout(() => {
    window.location.href = "index2.html"; 
}, 3000); // in ms btw

      
console.log("successScr2");
errorMessage.style.color = "green";
errorMessage.textContent = "Success! Next up: placeholder";
screens += 1;
setTimeout(() => {
    window.location.href = "index2.html"; 
}, 3000);// still ms
