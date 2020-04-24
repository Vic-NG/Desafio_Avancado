function executarLogin(){
    var user = document.getElementById("login");
    var senha = document.getElementById("loginPassword")

    if(user.value == "" && user.value != "tlopes@gmail.com"){
        alert("Insira seu e-mail.");
        user.focus();
        return false;
    }

    if(senha.value == "" && senha.value != 123456){
        alert("Insira sua senha.");
        senha.focus();
        return false;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xhttp.responseText);
           var converterJson = JSON.parse(xhttp.responseText);
           localStorage.setItem("token", converterJson["token"]);
        }
    }
    xhttp.open("POST", "http://52.91.139.190/fsapi/users/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let objeto = {"email":document.getElementById("login").value, "password":document.getElementById("loginPassword").value};
    console.log(JSON.stringify(objeto));
    xhttp.send(JSON.stringify(objeto));

    return false;
}