"use strict";

function seleccion(evt, x){
    var i,info,tabuladores;
    
    info = document.getElementsByClassName("info");
    for(i = 0; i<info.length; i++){
        info[i].style.display = "none";

    }
    tabuladores = document.getElementsByClassName("tabuladores");
    for(i = 0; i<tabuladores.length; i++){
        tabuladores[i].className = tabuladores[i].className.replace(" active","");
    }
    document.getElementById(x).style.display = "block";
    evt.currentTarget.className += " active";

}
