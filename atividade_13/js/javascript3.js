function mostrarCarros() {
    carros = [{imagem: "./img/civic.jpg", fabricante: "Honda", nomeCarro: "Civic", potencia: "150 cv", garantia:"3 anos", consumo: "9,7 km/l"}, {imagem: "./img/corolla.jpg", fabricante: "Toyota", nomeCarro: "Corolla", potencia: "144 cv", garantia:"3 anos", consumo: "10,6 km/l"}, {imagem: "./img/troller.jpg", fabricante: "Ford", nomeCarro: "Troller", potencia: "200 cv", garantia:"3 anos", consumo: "7,7 km/l"}, {imagem: "./img/wrangler.jpg", fabricante: "Jepp", nomeCarro: "Wrangler", potencia: "199 cv", garantia:" anos", consumo: "3,1 km/l"}]

    usuario = JSON.parse(localStorage.getItem("usuarios"))
    //(!usr)

    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"))
    //(!usr)

    if (tabUsuarios == null) document.write("não há usuário cadastrado")
    else if(tabUsuarios.usuarios.length == 1) {
        document.getElementById("nomeUsuario").innerHTML = `${tabUsuarios.usuarios[0].nome}`
        if(tabUsuarios.usuarios[0].passatempo == 2) setInterval("changeCar1()", 2000)
        else if(tabUsuarios.usuarios[0].passatempo == 3) setInterval("changeCar2()", 2000)
    } else {
        for(var i=0; i<tabUsuarios.usuarios.length; i++){
            ultima_posicao = tabUsuarios.usuarios.length -1
            if(i == ultima_posicao) {
                document.getElementById("nomeUsuario").innerHTML = `${tabUsuarios.usuarios[ultima_posicao].nome}`
                if(tabUsuarios.usuarios[i].passatempo == 2) setInterval("changeCar1()", 2000)
                else if(tabUsuarios.usuarios[i].passatempo == 3) setInterval("changeCar2()", 2000)
            }
        }
    }
}

contador = 0
function changeCar1() {
    if  (contador == 0){
        escreverDadosCarros(0)
        contador++
    } else if (contador == 1){
        escreverDadosCarros(1)
        contador = 0
    }
}

contador2 = 0
function changeCar2() {
    if  (contador2 == 0){
        escreverDadosCarros(2)
        contador2++
    } else if (contador2 == 1){
        escreverDadosCarros(3)
        contador2 = 0
    }
}

function escreverDadosCarros(posicao){
    document.getElementById("imagem").src = `${carros[posicao].imagem}`
    document.getElementById("fabricante").innerHTML = `${carros[posicao].fabricante}`
    document.getElementById("nomeCarro").innerHTML = `${carros[posicao].nomeCarro}`
    document.getElementById("potencia").innerHTML = `${carros[posicao].potencia}`
    document.getElementById("garantia").innerHTML = `${carros[posicao].garantia}`
    document.getElementById("consumo").innerHTML = `${carros[posicao].consumo}`
}

function mudarPerfil(){
    window.open("index.html", '_self', false)
}