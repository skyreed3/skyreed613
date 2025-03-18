function showAlert() {
    alert("Спасибо за интерес к моему блогу! Подробности скоро появятся.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше сообщение отправлено!');
    this.reset();
});
