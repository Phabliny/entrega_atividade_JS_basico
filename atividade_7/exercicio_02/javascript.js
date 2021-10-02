clicks1 = 1
        clicks2 = 1
        clicks3 = 1
        clicks4 = 1

        meuStorage = localStorage
        function votar(id) {
            cpf = prompt("Digite o número do seu CPF: (nesse caso digite apenas 4 digítos)")
            
            if(cpf.length == 4){
                if(localStorage.getItem(`${cpf}`) === null){
                    localStorage.setItem(`${cpf}`,true)
                    if(id == "cand1"){
                        document.getElementById(`numVotos1`).innerHTML = `Número de votos : <span style="color:red; font-size: 25px">${clicks1}</span>`
                        clicks1++
                    } else if (id == "cand2") {
                        document.getElementById(`numVotos2`).innerHTML = `Número de votos : <span style="color:red; font-size: 25px">${clicks2}</span>`
                        clicks2++
                        
                    } else if (id == "cand3") {
                        document.getElementById(`numVotos3`).innerHTML = `Número de votos : <span style="color:red; font-size: 25px">${clicks3}</span>`
                        clicks3++
                        
                    } else if (id == "cand4") {
                        document.getElementById(`numVotos4`).innerHTML = `Número de votos : <span style="color:red; font-size: 25px">${clicks4}</span>`
                        clicks4++
                    }
                }else {
                    alert("Operação inválida! Você já votou anteriormente.")
                }
                    
            } else {
                alert("CPF inválido! Digite todos os números corretamente.")
            }
            

            if((clicks2 == clicks3) && (clicks2 == clicks4) && (clicks2 == clicks1) && (clicks2 == 0)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks1 > clicks2) && (clicks1 > clicks3) && (clicks1 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks2 > clicks1) && (clicks2 > clicks3) && (clicks2 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks3 > clicks1) && (clicks3 > clicks2) && (clicks3 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks4 > clicks1) && (clicks4 > clicks2) && (clicks4 > clicks3)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "green"
            } else if ((clicks1 == clicks2) && (clicks1 > clicks3) && (clicks1 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks1 == clicks3) && (clicks1 > clicks2) && (clicks1 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks1 == clicks4) && (clicks1 > clicks2) && (clicks1 > clicks3)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks2 == clicks3) && (clicks2 > clicks1) && (clicks2 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks2 == clicks4) && (clicks2 > clicks1) && (clicks2 > clicks3)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "green"
            } else if ((clicks3 == clicks4) && (clicks3 > clicks1) && (clicks3 > clicks2)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "green"
            } else if ((clicks1 == clicks2) && (clicks1 == clicks3) && (clicks1 > clicks4)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "#C3D99E"
            } else if ((clicks1 == clicks2) && (clicks1 == clicks4) && (clicks1 > clicks3)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato4').style.backgroundColor = "green"
            } else if ((clicks1 == clicks3) && (clicks1 == clicks4) && (clicks1 > clicks2)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "green"
            } else if ((clicks2 == clicks3) && (clicks2 == clicks4) && (clicks2 > clicks1)) {
                document.getElementById('candidato1').style.backgroundColor = "#C3D99E"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "green"
            }else if ((clicks2 == clicks3) && (clicks2 == clicks4) && (clicks2 == clicks1) && (clicks2 != 0)) {
                document.getElementById('candidato1').style.backgroundColor = "green"
                document.getElementById('candidato2').style.backgroundColor = "green"
                document.getElementById('candidato3').style.backgroundColor = "green"
                document.getElementById('candidato4').style.backgroundColor = "green"
            }
        } 