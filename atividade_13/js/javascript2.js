segundos = Math.floor(Math.random() * (10 - 5 + 1) + 5);
function temporizador() {
    if((segundos < 4) && (segundos > 0)) document.getElementById('timer').innerHTML = `<span style="color:red;">${segundos}</span>`
    else document.getElementById('timer').innerHTML = `${segundos}`

    if (segundos == 0) {
        clearInterval(contador)
        window.open("verVeiculos.html", '_self', false)
    } else segundos--
}
var contador = setInterval('temporizador()', 1000)