let screenCounter = 0;

document.getElementById("inputForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const inputField = document.getElementById("inputReader")
    const input = inputField.value.trim();
    console.log("submitted")
if (input === "help") {
        console.log("success");
}else{
    console.error("invalid");
}
});

