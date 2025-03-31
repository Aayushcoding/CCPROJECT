function showMessage() {
    let messageElement = document.getElementById("message");
    
    if (messageElement.innerText === "") {
        messageElement.innerText = "Hi, I am Jaywant Avhad";
    } else {
        messageElement.innerText = "";
    }
}
