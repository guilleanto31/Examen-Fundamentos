"use strict";

var img = 1
var carrusel = {};
var total = 0;

carrusel = [{imageurl:"img/redes_Meme.png"},{imageurl:"img/historias_Meme.png"}];

var cambiar = function(mas){
    total = carrusel.length;
    img = img +mas;
    if(img > total){
        img=1;
    } 
    if (img < 1){
        img = total;
    }
    
    document.getElementById('img-redes').src = carrusel[img-1].imageurl;;

}