//instance ICON
feather.replace()

document.addEventListener("DOMContentLoaded",function(){

    //seleccionar inputs

    const inputEmail=document.querySelector("#email");
    const inputSubject=document.querySelector("#asunto");
    const inputMessage=document.querySelector("#mensaje");
    const formElement=document.querySelector("#formulario")
    
//
    inputEmail.addEventListener("blur",validarInputs);
    inputSubject.addEventListener("blur",validarInputs);
    inputMessage.addEventListener("blur",validarInputs);

    function validarInputs(e){
        if(e.target.value.trim()===""){
            mostrarAlert(`El campo ${e.target.id} es obligario`,e.target.parentElement);
            return;
        }
        if(e.target.id==="email" && !validationEmail(e.target.value)){
            mostrarAlert("El email no es valido",e.target.parentElement)
        return
        }
        clearFormAlertElement(e.target.parentElement);
    }
    function mostrarAlert(message,referenceDomElement){
            //clear notificacion
            clearFormAlertElement(referenceDomElement);

            const errorElement=document.createElement("SMALL");
            errorElement.textContent="Hubo un error...";
            errorElement.textContent=message;
            errorElement.classList.add("bg-red-600","text-white","p-2","text-center","alert-custom-element")


           //formElement.appendChild(errorElement);
           //para que tenga la referencia exacta
           referenceDomElement.appendChild(errorElement)
    }

    function clearFormAlertElement(referenceDomElement){
        const alertFormDom=referenceDomElement.querySelector(".alert-custom-element");
        if(alertFormDom){
            alertFormDom.remove()
        }
    }
    function validationEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultValidation=regex.test(email)
        return resultValidation;

    }

})


///137