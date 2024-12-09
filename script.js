function revealMessage() {
    const messages = document.querySelectorAll('.romantic-messages .message');
    const container = document.querySelector('.romantic-messages');
    container.style.display = "block";

    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = 1;
        }, index * 1000); // Muestra un mensaje cada segundo
    });
}

