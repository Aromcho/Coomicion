const boton = document.querySelector("#boton");
const cajita = document.querySelector("#cajita");

//evento
 boton.addEventListener("click", cambiarDirecion);

 // funcion
 function cambiarDirecion() {
    cajita.classList.toggle("Click")
    cajita.classList.toggle('cajita')
 }