
// llamamos  a los elementos

const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");



// funvión scroll: cuando detectes scroll en el documento (window),
// necesito que envies esta función 

window.addEventListener("scroll", function(){

// creamos condicional : en el caso de que el contenedor "contenedor.getBoundingClientRect()"
// detecte  que se hizo scroll ".top<10" 10 hacia abajo, quiero que el "header" le añadas 
// la clase scroll, que la crearemos en css "header.classList.add("scroll")


    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }

    //  o quitar "remove" la clase "scroll"
    else{
        header.classList.remove("scroll")
    }
})