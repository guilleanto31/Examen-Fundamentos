"use strict";
const proyectos = document.querySelectorAll('.proyectos .card'),
desplegar = document.querySelector('.cont-img'),
imgMostrar = desplegar.querySelector('#img-redes')

var span = document.getElementsByClassName('cerrar')[0];

var img = 1
var carruselMeme = {};

var total = 0;

span.onclick = function(){
    desplegar.style.display= 'none';
}

window.onload = function mostrar(){
    for (let x = 0; x< proyectos.length; x++){
        proyectos[x].onclick = () => {
            console.log(x)
            desplegar.style.display = 'block';

            function mostrar(){
                let selectImgUrl = desplegar.querySelector(".img-redes").src;
                console.log(selectImgUrl); 
            }
            mostrar()
            if (x == '1'){
                carruselMeme = [{imageurl:"img/impresion_Tulin(1).png"},{imageurl:"img/impresion_Tulin(2).png"},{imageurl:"img/impresion_Tulin(3).png"},{imageurl:"img/impresion_Tulin(4).png"}];
                imgMostrar.src = ("img/impresion_Tulin(1).png");
            }
            if (x == '0'){
                carruselMeme = [{imageurl:"img/impresion_Salsa(1).png"},{imageurl:"img/impresion_Salsa(2).png"},{imageurl:"img/impresion_Salsa(3).png"},{imageurl:"img/impresion_Salsa(4).png"}];
                imgMostrar.src = ("img/impresion_Salsa(1).png");
            }


        }
        

    }
 
}


var cambiar = function(mas){
    total = carruselMeme.length;
    img = img +mas;
    if(img > total){
        img=1;
    } 
    if (img < 1){
        img = total;
    }
    
    document.getElementById('img-redes').src = carruselMeme[img-1].imageurl;;

}