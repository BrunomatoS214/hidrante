function Login(){
    var senha = document.getElementById('password').value;
    if(senha == "27010511"){
        location.href = "../pagprin/index.html";
    }else{
        alert("ERROU")
    }
}

function confirm_senha(){
    var senha = document.getElementById('password').value;
    var senha1 = document.getElementById('cpassword').value;
    
    if(senha1 === senha){
     Login()
    }else{
        alert("ERRO OTARIO")
    }
}

