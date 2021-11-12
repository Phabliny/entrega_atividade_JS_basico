imagens = ["imagens/corola.jpg", "imagens/civic.jpg", "imagens/focus.jpg"]
nomes = ["Corola", "Civic", "Focus"]
potencia = ["155 cv", "140 cv", "172 cv"]
garantia = ["3 anos", "3 anos", "5 anos"]
consumo = ["não foi informado", "9,2km/l", "8,5km/l"]

function play() {
    temporizador = setInterval("changeCar()", 1000)
}

function elementos(posicao){
    document.getElementById("imagem").src = `${imagens[posicao]}`
    document.getElementById("nome").innerHTML = `${nomes[posicao]}`
    document.getElementById("potencia").innerHTML = `${potencia[posicao]}`
    document.getElementById("garantia").innerHTML = `${garantia[posicao]}`
    document.getElementById("consumo").innerHTML = `${consumo[posicao]}`
}

contador = 0
function changeCar() {

    if  (contador == 0){
        elementos(1)
        contador++
    } else if (contador == 1){
        elementos(2)
        contador++
    } else if (contador == 2){
        elementos(0)
        contador = 0;
    }
}

function parar(){
    clearTimeout(temporizador)
}