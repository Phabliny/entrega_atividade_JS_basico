function changeBoy(nameImg, msg) {
    document.getElementById("imgBoy").src = `img/${nameImg}.png`
    document.getElementById("txtBoy").innerHTML = msg

    if(nameImg == "alegre"){
        nome = prompt("Qual o seu nome?")
        document.getElementById("txtBoy").innerHTML = `${nome}, vamos brincar?`
    }
}

function sair() {
    if(prompt("Deseja realmente sair? Digite SIM ou NÃO").toUpperCase() == 'SIM'){
        window.open("index.html","_self");
    }
}