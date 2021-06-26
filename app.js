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

document.onmouseover = ver;
            function ver(e){
                var x, y, x1, x2, y1, y2;
                fact = 800/400;
                opp=100;
                if(e = null) e = window.event;

                x = e.clientX;
                y = e.clientY;
                x1 = - opp+(x)*fact;
                y1 = - opp+(y)*fact;
                x2 = + opp+(x)*fact;
                y2 = + opp+(y)*fact;

                document.images.grande.style.display ="inline";
                document.images.grande.style.left = (x) * (1-fact);
                document.images.grande.style.top = (y) * (1-fact);
                document.images.grande.style.clip ="rect("+y1+"px," +x2+ "px,"+y2+ "px," +x1+ "px)";
                    
                
            }
