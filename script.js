function showMessage() {
    let messageElement = document.getElementById("message");
    
    if (messageElement.innerText === "") {
        messageElement.innerText = "Hi, I am Jaywant Awhad";
    } else {
        messageElement.innerText = "";
    }
}
