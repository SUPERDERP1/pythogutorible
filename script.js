document.addEventListener("DOMContentLoaded", () => {
    let screenCounter = 0;

    document.getElementById("inputForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const inputField = document.getElementById("inputReader");
        const input = inputField.value.trim();
       
        console.log("submitted");
       
        if (input === "help") {
            console.log("success");
            window.location.href = "index2.html"; 
        } else {
            console.error("invalid");
        }
    });
});