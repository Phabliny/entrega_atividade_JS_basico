meuStorage = localStorage;

function validar(){
    nomeUsuario = document.getElementById("nome").value
    idadeUsuario = document.getElementById("idade").value
    passatempoUsuario = document.getElementById("passatempo").value
    padraoNome = (/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/)

    usr = {nome: nomeUsuario, idade: idadeUsuario, passatempo: passatempoUsuario} 

    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"))

    if(tabUsuarios == null) tabUsuarios = {usuarios:[]}

    if (!padraoNome.test(nomeUsuario)){
        alert("Nome INVÁLIDO! Favor digitar novamente com o nome e o sobrenome começando por letra maiúscula!")
    } else if((idadeUsuario < 1) || (idadeUsuario > 130)){
        alert("Idade INVÁLIDA! Favor digitar novamente!")
    } else if (passatempoUsuario == 1) {
        alert("Passatempo INVÁLIDO! Favor digitar novamente!")
    } else {
        tabUsuarios.usuarios.push(usr)
        localStorage.setItem("tabUsuarios", JSON.stringify(tabUsuarios))
        window.open("aguarde.html", '_self', false)
    }
}