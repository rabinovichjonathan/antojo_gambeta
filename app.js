function enviar_formulario(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
   
   if(nombre && email && telefono && mensaje){

    document.getElementById('mensaje_exitoso').innerHTML = ("Su mensaje ha sido enviado correctamente. Gracias por contactarse con Antojo y Gambeta. Nos comunicaremos con ud. a la brevedad.");
   }
  
}
