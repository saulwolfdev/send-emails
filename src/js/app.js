//instance ICON
feather.replace();

document.addEventListener("DOMContentLoaded", function () {
  
  
 const emailSendValues = {
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
  const buttonFormReset = document.querySelector('#formulario button[type="reset"]');
  const formSpinner = document.querySelector("#spinner");

  inputEmail.addEventListener("input", validationInputs);
  inputSubject.addEventListener("input", validationInputs);
  inputMessage.addEventListener("input", validationInputs);

  formElement.addEventListener('submit', sendEmailSpinner);


  buttonFormReset.addEventListener('click',function(e){
      e.preventDefault();
      hardResetForm();
      verificacionEmailValuesElements();
  })

function sendEmailSpinner(e){
e.preventDefault();
formSpinner.classList.add('flex');
formSpinner.classList.remove('hidden');

setTimeout(()=>{
  formSpinner.classList.remove('flex');
  formSpinner.classList.add('hidden');

  hardResetForm();
  verificacionEmailValuesElements();


  const alertSendOKMessage=document.createElement('P');
        alertSendOKMessage.classList.add("bg-green-500","text-white","p-2","text-center");
        alertSendOKMessage.textContent='El mensaje fue enviado correctamente';

        formElement.appendChild(alertSendOKMessage);
        setTimeout(() => {
            alertSendOKMessage.remove();       
        }, 3000);
},3000)
}


//Validacion de INPUTS
  function validationInputs(e) {
    //Validacion de inputs no estes vacios
    if (e.target.value.trim()==="") {
      showAlertErrors(`El campo ${e.target.id} es obligario`,e.target.parentElement);
      emailSendValues[e.target.name]='';
      verificacionEmailValuesElements();
      return;
    }
     //Validacion de correo este en el formato adecuado
    if (e.target.id==="email" && !validationEmail(e.target.value)) {
      showAlertErrors("El email no es valido", e.target.parentElement);
      emailSendValues[e.target.name]='';
      verificacionEmailValuesElements();
      return;
    }
    clearFormAlertElement(e.target.parentElement);

    //VALIDACION OK EMAIL
    emailSendValues[e.target.name] = e.target.value.trim().toLowerCase();
    console.log("informacion de los valores del correo OK",emailSendValues)
    verificacionEmailValuesElements();
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



  function verificacionEmailValuesElements(){
  if(Object.values(emailSendValues).includes('')){
    buttonFormSubmit.classList.add('opacity-50');
    buttonFormSubmit.disabled = true;
    return;
  }
  buttonFormSubmit.classList.remove('opacity-50');
  buttonFormSubmit.disabled = false;
  }

 function hardResetForm(){
        //reinicar el objeto:
        emailSendValues.email='',
        emailSendValues.asunto='',
        emailSendValues.mensaje=''
  
        formElement.reset();
 }

});

