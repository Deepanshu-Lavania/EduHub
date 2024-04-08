function onclickmenu() {
    document.getElementById("phone-menu").classList.toggle("phone-hamburger");
    document.getElementById("change-navbar--list").classList.toggle("list-change");
}

// !emailjs
// start email.js
function sendMail() {
    if (navigator.onLine) {
        var form_data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            title:document.getElementById("title").value,
            message: document.getElementById("message").value
        }
        emailjs
            .send("service_thdpjkt", "template_6xxx0ye", form_data)//inbuilt in emiljs
            .then(function (res) {
                alert("success!" + res.status);
                document.getElementById("form_id").reset();
                // document.getElementById("name").value = "";
                // document.getElementById("email").value = "";
                // document.getElementById("message").value = "";
            })
            .catch((err) => {
            alert("you are offline please, check your internet connection", err);
        })
    }
    else {
        alert("May be your connection are offline, please check your internet connection");
    }
}

