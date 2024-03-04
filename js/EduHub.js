function onclickmenu() {
    document.getElementById("phone-menu").classList.toggle("phone-hamburger");
    document.getElementById("change-navbar--list").classList.toggle("list-change");
}

// !emailjs
(function () {
    emailjs.init("iYdHW7m5PpxxcC-Km");
})();
document.getElementById('form_id').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: this.name.value,
        email: this.email.value,
        title: this.title.value,
        message: this.message.value
    };
    emailjs.send("thdpjkt", "6xxx0ye", formData)
        .then(function (response) {
            console.log('Success!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('form_id').reset();
        }, function (error) {
            console.log('Failed!', error);
            alert('Message failed to send.');
        });
});

