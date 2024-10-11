//instance ICON
feather.replace();

document.addEventListener("DOMContentLoaded", function () {
  
  
 const emailSend = {
    email: "",
    asunto: "",
    mensaje: ""
  };
  //seleccionar inputs

  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#asunto");
  const inputMessage = document.querySelector("#mensaje");
  const formElement = document.querySelector("#formulario");
  const buttonFormSubmit = document.querySelector('#formulario button[type="submit"]');

  inputEmail.addEventListener("input", validationInputs);
  inputSubject.addEventListener("input", validationInputs);
  inputMessage.addEventListener("input", validationInputs);

//Validacion de INPUTS
  function validationInputs(e) {
    //Validacion de inputs no estes vacios
    if (e.target.value.trim()==="") {
      showAlertErrors(`El campo ${e.target.id} es obligario`,e.target.parentElement);
      return;
    }
     //Validacion de correo este en el formato adecuado
    if (e.target.id==="email" && !validationEmail(e.target.value)) {
      showAlertErrors("El email no es valido", e.target.parentElement);
      return;
    }
    clearFormAlertElement(e.target.parentElement);

    //VALIDACION OK EMAIL
    emailSend[e.target.name] = e.target.value.trim().toLowerCase();

    console.log("informacion del correo",emailSend)
  }

  function showAlertErrors(message, referenceDomElement) {
    //clear notificacion
    clearFormAlertElement(referenceDomElement);

    const errorElement = document.createElement("SMALL");

    errorElement.textContent = "Hubo un error...";
    errorElement.textContent = message;
    errorElement.classList.add(
      "bg-red-600",
      "text-white",
      "p-2",
      "text-center",
      "alert-custom-element"
    );
    //formElement.appendChild(errorElement);
    //para que tenga la referencia exacta
    referenceDomElement.appendChild(errorElement);
  }

  function clearFormAlertElement(referenceDomElement) {
    const alertFormDom = referenceDomElement.querySelector(".alert-custom-element");
    if (alertFormDom) {
      alertFormDom.remove();
    }
  }
  function validationEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultValidation = regex.test(email);
    console.log("validar OK form")
    return resultValidation;

  }



  function verificacionEmailValue(){
    if (Object.values(emailSend).includes("")) {
        buttonFormSubmit.classList.add('opacity-50');
        buttonFormSubmit.disabled = true;
        console.log("verificaciom OK form")
        return;
    } 
    buttonFormSubmit.classList.remove('opacity-50');
    buttonFormSubmit.disabled = false;
  }
});

///137
