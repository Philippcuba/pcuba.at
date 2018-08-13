//---------------------//
//------FORMULAR-------//
//---------------------//

window.onload = function() {

  var form = document.querySelector(".main-7_container");
  var error
  var name = document.getElementById("name");
  var message = document.getElementById("message");
  var email = document.getElementById("email");
  var send = document.querySelector(".main-7_button");

  var name_error = document.querySelector(".js-name_error");
  var message_error = document.querySelector(".js-message_error");
  var email_error = document.querySelector(".js-email_error");

  form.addEventListener("submit", function(_e){

    //Name

    if (name.value.trim().length > 0) {
      console.log("Name passt");
      name_error.textContent = "";
      name_error.classList.remove("error");
    } else {
      error = true;
      name_error.textContent = "Bitte einen Namen angeben!";
      name_error.classList.add("error");
    }

    //Message

    if (message.value.trim().length > 0) {
      //console.log("Nachname passt");
      message_error.textContent = "";
      message_error.classList.remove("error");
    } else {
      error = true;
      message_error.textContent = "Bitte eine Nachricht eingeben!";
      message_error.classList.add("error");
    }

    //email

    if (email.value.trim().length > 0 ) {
      if (email.value.indexOf("@") < 0 || email.value.indexOf("@") == email.value.length -1) {
        error = true;
        email_error.textContent = "Die E-Mail ist nicht valide!";
        email_error.classList.add("error");
      } else {
        //console.log("Die Email passt")
        email_error.textContent = "";
        email_error.classList.remove("error");
      }
    } else {
      error = true;
      email_error.textContent = "Bitte eine E-Mail angeben!";
      email_error.classList.add("error");
    }

    //preventDefault

    if (error == true) {
      _e.preventDefault();
      error = false;
    }
  });
}
