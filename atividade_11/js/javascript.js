function cadastrar() {
    nomeUser = document.getElementById("nome").value
    ra_user = document.getElementById("ra").value
    nota1user = document.getElementById("nota1").value
    nota2user = document.getElementById("nota2").value

    usr = {nome: nomeUser, ra: ra_user, nota1: nota1user, nota2: nota2user} //objeto

    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"))

    if(tabUsuarios == null) tabUsuarios = {usuarios:[]}

    padraoNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    console.log(nota1user)

    if(!padraoNome.test(nomeUser)) alert("Nome inválido!!!")
    else if((ra_user<100) || (ra_user>999)) alert("Número de matrícula inválido!!! (Digite apenas 3 números)")
    else if ((nota1user<0) || (nota2user<0) || (nota1user>50) || (nota2user>50) || (!nota1user) || (!nota2user)) alert("Nota inválida (digite um valor entre 0 e 50)!!!")
    else {
        tabUsuarios.usuarios.push(usr)
        localStorage.setItem("tabUsuarios", JSON.stringify(tabUsuarios))
        alert("Cadastro realizado com sucesso!")
    }
}

function listar() {
    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"))
    //(!usr)
    if (tabUsuarios == null) document.write("não há usuário cadastrado")
    else{
        document.write(`<table style="width: 600; border: 1px solid black; text-align: center; margin-left: auto; margin-right: auto; margin-top: 10vh; border-collapse: collapse;">`)
            document.write("<tr>")
                document.write(`<th style="border: 1px solid black;">Nome</th>`)
                document.write(`<th style="border: 1px solid black">R.A</th>`)
                document.write(`<th style="border: 1px solid black">Nota (1° bim)</th>`)
                document.write(`<th style="border: 1px solid black">Nota (2° bim)</th>`)
                document.write(`<th style="border: 1px solid black">Total</th>`)
                document.write(`<th style="border: 1px solid black">Situação</th>`)
            document.write("</tr>")                
        for(var i=0; i<tabUsuarios.usuarios.length; i++){
            nota1 = parseInt(tabUsuarios.usuarios[i].nota1)
            nota2 = parseInt(tabUsuarios.usuarios[i].nota2)
            soma = nota1 + nota2
            situacao = ""
            if(soma>=60) situacao = "APROVADO"
            else situacao = "REPROVADO"
            document.write("<tr>")
                document.write(`<td style="border: 1px solid black">${tabUsuarios.usuarios[i].nome}</td>`)
                document.write(`<td style="border: 1px solid black">${tabUsuarios.usuarios[i].ra}</td>`)
                document.write(`<td  style="border: 1px solid black">${nota1.toFixed(1)}</td>`)
                document.write(`<td  style="border: 1px solid black">${nota2.toFixed(1)}</td>`)
                document.write(`<td  style="border: 1px solid black">${soma.toFixed(1)}</td>`)
                document.write(`<td style="border: 1px solid black">${situacao}</td>`)
            document.write("<tr>")
            
        }
        document.write("</table>")
    } 
}