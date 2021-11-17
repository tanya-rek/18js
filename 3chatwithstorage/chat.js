document.addEventListener("DOMContentLoaded", function (event) {
    
    if (localStorage.getItem('username') !== null) {
        document.querySelector('#your-name').value = document.querySelector('#your-name').value;
    }
});

document.getElementById('addcomment').onclick = function() {
    let comment = document.querySelector('#comment').value;
    let username = document.querySelector('#your-name').value;
    
    errorMessage.innerHTML = "";
    if (!comment) {
        errorMessage.innerHTML += "You should write a comment before posting it.<br>";
    }
    if (!username) {
        errorMessage.innerHTML += "Please enter your name before posting it.<br>";
    }
    if (!comment || !username) {
        return;
    }
    
    let checkSpam = (str) => {
        let cleanedCommentVia = str.replace(/viagra/gi, "***");
        let cleanedMessages = cleanedCommentVia.replace(/xxx/gi, "***");
        return cleanedMessages;
    }

    let checkedMessage = checkSpam(comment);

    if (localStorage.getItem('username') === null) {
        localStorage.setItem('username', username);
    }
    document.querySelector('#chat__area').innerHTML += `<div class="chat__message">${username}: ${checkedMessage}</div>`;
    
    document.querySelector('#comment').value = '';



}


