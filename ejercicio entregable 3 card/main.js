//se seleccionan los elementos del dom
let card = document.querySelector(".card");
let contenedor = document.querySelector(".card-Contenedor")
let img = document.getElementById("imgJugadores");
let texto = document.getElementById("texto");
//se setea la cantidad imagenes de jugadores y el primer jugador a mostrar en la card
const CANT_CARTAS_JUGADORES= 9;
let jugador = "img/jugadores/jugador1.jpg"
img.src = jugador;
let numero = 1;

//al mover el mouse (dentro del contenedor de la card), se aplican las diferentes transformaciones (a la card), tanto en eje "X" como en "Y" en funcion de la posicion del mouse
contenedor.addEventListener("mousemove",(e)=>{
    let xDeg = (window.innerWidth /1.8 - e.pageX )/10;
    let yDeg = (window.innerHeight /1.8 - e.pageY )/10;
    card.style.transform = 'rotateX('+ xDeg+'deg) rotateY('+yDeg+'deg)';
})

//se quita la transformacion de "rotate" al quitar el mouse de encima del contenedor de la card
contenedor.addEventListener("mouseout", ()=>{
    card.style.transform = 'rotate( 0deg)';
})

// al hacer click en la card llama a la funcion cambiar jugador
card.addEventListener("click", cambiarJugador);

// funcionalidad para cambiar imagen del jugador en la card
function cambiarJugador(){
    // se setea la src de la imagen de la card
    jugador = "img/jugadores/jugador"+numero+".jpg";
    img.src = jugador;
    // se incrementa el numero
    numero++;
    // si el numero es mayor a la cant de cartas de jugadores se setea en 0 y vuelve a arrancar
    if(numero > CANT_CARTAS_JUGADORES ){
        numero = 0;
    }
    // una vez que se hizo click en la carga se quita el texto
    texto.innerHTML = "";
}

// cambiar color del texto cada 0.3 segundos
cambiarColorTexto()

function cambiarColorTexto(){
    setInterval(() => {
        texto.style.color = randomRGB();
    }, 300);
}

// generar color random
function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}