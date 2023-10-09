
var clack = document.getElementById('clack'),
 titulo = document.getElementById('titulo'),
 h2 = document.getElementById('h2'),
 contador=0;
//funcion
function cambio()
{
    if(contador==0){
        titulo.classList.add('hola');
        contador=1,
        h2.classList.add('algo');
        contador=1;
    }
    else{titulo.classList.remove('hola'),h2.classList.remove('algo');
    contador=0};
    
}
//siguienyte
clack.addEventListener('click',cambio,true);

var 