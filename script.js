// js code sucks
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    document.getElementById("inputForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const inputField = document.getElementById("inputReader");
        const input = inputField.value.trim();
        const errorMessage = document.getElementById("errorMessage");
       
        console.log("submitted");
       
        if (input === "help") {
            console.log("success");
            errorMessage.color = "green";
            errorMessage.textContent = "Success! Next up: placeholder";
            setTimeout(() => {
                window.location.href = "index2.html"; 
            }, 3000); // in ms btw
        } else {
            console.error("invalid");
            errorMessage.textContent = "Not Quite! Try Again";
        }
    });
});