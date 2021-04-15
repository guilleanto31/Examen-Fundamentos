"use strict";
const proyectos = document.querySelectorAll('.proyectos .card'),
desplegar = document.querySelector('.cont-img'),
imgMostrar = desplegar.querySelector('#img-redes')

var span = document.getElementsByClassName('cerrar')[0];

var img = 1
var carruselMeme = {};

carruselMeme = [{imageurl:"img/redes_Meme.png"},{imageurl:"img/historias_Meme.png"}];

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
                carruselMeme = [{imageurl:"img/dra_redes.png"},{imageurl:"img/dra_redes_2.png"}];
                imgMostrar.src = ("img/dra_redes.png");
            }
            if (x == '0'){
                carruselMeme = [{imageurl:"img/redes_Meme.png"},{imageurl:"img/historias_Meme.png"}];
                imgMostrar.src = ("img/redes_Meme.png");
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