segundos = 4;
function contagemBomba() {
    document.getElementById('contagem').innerHTML = `${segundos}`
    if (segundos == 0) {
        clearInterval(contador)
        document.getElementById('mensagem').innerHTML = "Explodiu!"
        document.getElementById('contagem').innerHTML = "0"
        document.getElementById("imagem").src = `imagens/explosao.png`
    } else {
        segundos--
    }
}
var contador = setInterval('contagemBomba()', 1000)