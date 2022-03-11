function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName =  document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/api/register");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "username" : username,
        "password" : password,
        "confirmPassword" : confirmPassword
    }));

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            const objects = JSON.parse(this.responseText);
            console.log(objects.success);
            if(objects.success == true){
                document.getElementById("response").innerHTML = `<div class="alert alert-success" role="alert">
                Account created successfully. <a href="index.html">Login</a>
              </div>`
            }else{
                document.getElementById("response").innerHTML = `<div class="alert alert-danger" role="alert">
                An error occurred, tyr again later
              </div>`
            }
        }
    }
    return false;
}