function verificar() {
    vet_inputs = document.getElementsByTagName("input")
    
    pais_vazio = 0    
    estado_vazio = 0 
    estadoCivil_vazio = 0
    sugestoes_vazio = 0
    cidade_vazio = 0
    estadoCivil_vazio = 0
    sexo_vazio = 0

    finalizar = 0

    for (i = 0; i < 3; i++) {
        validando_anteriores = 0;
        if (vet_inputs[i].type == "text") {
            if (vet_inputs[i].value == "") {
                alert(`Campo ${vet_inputs[i].name} está vazio!`)
                validando_anteriores += 1;
                break
            }else {
                finalizar += 1;
            }
        }
    }

    if (pais_vazio == 0 && validando_anteriores == 0) {
        pais = document.getElementById("txtPais")
        if (pais.value == "" && pais_vazio == 0) {
            alert(`Campo PAÍS está vazio!`)
            validando_anteriores += 1;
            estado_vazio += 1
        }else{
            finalizar += 1;
        }
    }

    if (estado_vazio == 0 && validando_anteriores == 0) {
        estado = document.getElementById("estado")
        if (estado.value == "selecione" && estado_vazio == 0) {
            alert(`Campo ESTADO está vazio!`)
            validando_anteriores += 1;
            estado_vazio += 1
        }else{
            finalizar += 1;
        }
    }

    if (cidade_vazio == 0 && validando_anteriores == 0) {
        cidade = document.getElementById("txtCidade")
        if (cidade.value == "") {
            alert(`Campo CIDADE está vazio!`)
            validando_anteriores += 1;
            cidade_vazio += 1
        }else{
            finalizar += 1;
        }
    }

    if (sexo_vazio == 0 && validando_anteriores == 0) {
        sexo = document.getElementById("SEXO")
        if (document.getElementById('SEXOM').checked == false && document.getElementById('SEXOF').checked == false) {
            alert(`Campo SEXO está vazio!`)
            validando_anteriores += 1;
            sexo_vazio += 1
        }else{
            finalizar += 1;
        }
    }
 
    if (estadoCivil_vazio == 0 && validando_anteriores == 0) {
        estadoCivil = document.getElementById("estCivil")
        if (estadoCivil.value == "selecione") {
            alert(`Campo ESTADO CIVIL está vazio!`)
            validando_anteriores += 1;
            estadoCivil_vazio += 1
        }else{
            finalizar += 1;
        }
    }

    if (sugestoes_vazio == 0) {
        sugestoes = document.getElementById("txtSugestoes")
        if (sugestoes.value == "" && validando_anteriores == 0) {
            alert(`Campo SUGESTÕES está vazio!`)
            validando_anteriores += 1;
            sugestoes_vazio += 1
        }else{
            finalizar += 1;
        }
    }

    console.log(finalizar)
    if(finalizar == 9){
        alert("Formulário finalizado com sucesso!")
    }
}
    
