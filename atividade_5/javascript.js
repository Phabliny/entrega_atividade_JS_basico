function entarSistema() {
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    confirmar_senha = document.getElementById("confirmar_senha").value;

    if(login != "")
        if(senha == confirmar_senha && senha != "")
            alert("Login realizado com sucesso!")
        else
            alert("Senha inválida!")
    else
        alert("Favor informar o Login")
}

function limparDados() {
    login = document.getElementById("login").value="";
    senha = document.getElementById("senha").value="";
    confirmar_senha = document.getElementById("confirmar_senha").value="";
}