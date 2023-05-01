"use strict";

let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("horas");

    
setInterval(()=>{
    // se obtienen los datos de la fecha actual
    let date = new Date();
    // se obtienen los segundos actuales en funcion de la variable date definida arriba 
    let seg = date.getSeconds();
    // se obtiene el angulo que deben tener la aguja en funcion del segundo actual
    let gradosSeg = 180 + seg * 6;
    // se rota la aguja al angulo correspondiente
    segundos.style.transform = 'rotate('+gradosSeg+'deg)';

    // se obtienen los minutos actuales en funcion de la variable date definida arriba
    let min = date.getMinutes();
    // se obtiene el angulo que deben tener la aguja en funcion del minuto actual
    let gradosMin = 180 + min * 6;
     // se rota la aguja al angulo correspondiente
    minutos.style.transform = 'rotate('+gradosMin+'deg)';

    // se obtienen la hora actual en funcion de la variable date definida arriba
    let hora = date.getHours();
    // se obtiene el angulo que deben tener la aguja en funcion de la hora actual
    let gradosHora = (hora/12) * 360  + 180;
     // se rota la aguja al angulo correspondiente
    horas.style.transform = 'rotate('+gradosHora +'deg)';
 
},1000);



