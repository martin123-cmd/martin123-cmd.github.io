document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    message.style.opacity = 0;
    
    setTimeout(() => {
        message.style.transition = "opacity 3s";
        message.style.opacity = 1;
    }, 2000);
});