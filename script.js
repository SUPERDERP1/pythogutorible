// js code sucks
let screens = 0;
document.addEventListener("DOMContentLoaded", () => { // why does the whole program kill itself if this isnt here
    console.log("the thing is working");

    document.getElementById("inputForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const inputField = document.getElementById("inputReader");
        const input = inputField.value.trim();
        const errorMessage = document.getElementById("errorMessage");
       
        errorMessage.style.color = "red";
        console.log("submitted");
       
        if (input === "help") {
            console.log("success");
            errorMessage.style.color = "green";
            errorMessage.textContent = "Success! Next up: placeholder";
            screens += 1;
            setTimeout(() => {
                window.location.href = "index2.html"; 
            }, 3000); // in ms btw

        } else if (input === "help" && screens == 1){
            console.log("successScr2");
            errorMessage.style.color = "green";
            errorMessage.textContent = "Success! Next up: placeholder";
            screens += 1;
            setTimeout(() => {
                window.location.href = "index2.html"; 
            }, 3000);// still ms
            
            
        } else {
            console.error("invalidScr");
            errorMessage.textContent = "Not Quite! Try Again";
            setTimeout(() => {
                errorMessage.textContent = "";
            }, 3750); // still still ms
        }
    });
});
