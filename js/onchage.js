'use strict';

window.onload = function(){
    document.getElementById('miembros').onchange = function(e){
        
        var n = e.target.value;
        var imagen = 'img/'+n+'.png';

        console.log(n);
        document.getElementById("foto-persona").setAttribute("src", imagen);
        if ( n == 'guille'){
            document.getElementById("titulo").innerHTML = 'Co-fundador';
            document.getElementById("nombre").innerHTML = '<h1>GUILLERMO ROSELLÓ</h1>';
            document.getElementById("puesto").innerHTML = '<h3>Director creativo y Diseño</h3>';
            document.getElementById("descripcion").innerHTML = '<p>Aficionado del arte como una forma de expresar y sacar a relucir los sentimientos.<br>Apasionado a la fotografía, que muestra el mundo, su belleza y lasdistintas maneras de verlo.<br>Fiel amante del diseño con un estilo simple y personal.</p>';
            
        }else{
            document.getElementById("titulo").innerHTML = 'Fundador';
            document.getElementById("nombre").innerHTML = '<h1>LEONARDO PEREZ</h1>';
            document.getElementById("puesto").innerHTML = '<h3>Gerente General</h3>';
            document.getElementById("descripcion").innerHTML = '<p>Publicista con énfasis en estrategia publicitaria.<br> Amante del mundo de la creatividad:imaginar, planificar y ejecutar<br>Fundador de Anclados desde 2017</p>';
        }
    }
}