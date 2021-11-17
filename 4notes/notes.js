document.getElementById('addcomment').onclick = function() {
    let comment = document.querySelector('#comment').value;
    
    if (!comment) {
        return;
    }
    
    let checkSpam = (str) => {
        let cleanedCommentVia = str.replace(/viagra/gi, "***");
        let cleanedMessages = cleanedCommentVia.replace(/xxx/gi, "***");
        return cleanedMessages;
    }

    let checkedMessage = checkSpam(comment);
    
    document.querySelector('#chat__area').innerHTML += `<div class="chat__message">${checkedMessage}</div>`;
    
    document.querySelector('#comment').value = '';
}


