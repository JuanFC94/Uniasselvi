
function Login(){
    var email_correto = "carloswilliamylourenco@gmail.com";
    var senha_correta = "12345678";

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if(email==""){
        alert("Preencha o campo e-mail");
    }else if(senha==""){
        alert("Preencha o campo senha");
    }else if(email != email_correto){
        alert("E-mail incorreto!");
    }else if(senha != senha_correta){
        alert("Senha inválida");
    }else{
        window.location.href = "home.html";
    }
}

function Sair(){
    window.location.href = "index.html";
}