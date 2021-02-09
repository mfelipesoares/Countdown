import Countdown from "./countdown.js"
const tempoferias = new Countdown ("10 March 2021 23:59:59 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index)=> {
        tempo.innerHTML = tempoferias.total[index]
    })
}
mostrarTempo();
setInterval(mostrarTempo, 1000);

