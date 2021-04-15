"use strict";
var num = 1

function enviar(){
    var nombreTxt = document.getElementById("nombre").value;
    var telefono = Number (document.getElementById("telefono").value);
    var emailTxt = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var x = true;

    if(nombreTxt=="" || emailTxt == ""|| telefono == ""|| mensaje == ""){
        Swal.fire({
            icon: 'warning',
            title: 'Revisar',
            text: 'Campos vacíos'
        })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Su mensaje ha sido enviado',
        })

    }
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("sector").value = "";

};
