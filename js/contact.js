const myEmail = document.getElementById("sendMail");
const contact = document.querySelector(".contact");

function sendM(e) {
  e.preventDefault();
  const name = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const subject = document.getElementById("inputSubject");
  const message = document.getElementById("inputMessage");

  if (!name.value || !email.value || !subject.value || !message.value) {
    console.log("Please check your entries");
    const checkE = document.createElement("div");
    checkE.classList.add("checkFields");
    checkE.innerText = "Please check your entries";
    // checkE.style = "background:red; border: 1px solid black; font-size: 22px";
    setTimeout(function() {
      checkE.classList.add("displayN");
    }, 2000);
    contact.appendChild(checkE);
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
        // if (response.ok) {
        //   successMsg();
        // }
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

myEmail.addEventListener("click", sendM);
