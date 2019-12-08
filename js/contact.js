const myEmail = document.getElementById("sendMail");

function sendM(e) {
  console.log(e);
  e.preventDefault();
  const name = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const subject = document.getElementById("inputSubject");
  const message = document.getElementById("inputMessage");

  if (!name.value || !email.value || !subject.value || !message.value) {
    console.log("Please check your entries");
  } else {
    fetch("https://formspree.io/xwkpakze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      })
    })
      .then(data => {
        console.log(data);
        data.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

myEmail.addEventListener("click", sendM);
