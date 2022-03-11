function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/api/login");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username" : username,
        "password" : password
    }));

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            const objects = JSON.parse(this.responseText);
            console.log(objects.success);
            if(objects.success == true){
                let role = objects.data.roles[0];
                localStorage.setItem("username",objects.data.username)
                localStorage.setItem("jwt", objects.data.token);
                if(role == 'ROLE_USER'){
                    // window.onbeforeunload = function() { return "Your work will be lost."; };
                    Toastify({
                        text: "This is a toast",
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    window.location.href = '../../user/buy.html';
                }else{
                    window.location.href = '../../dashboards/admin-dashboard.html';
                }
            }else{
                console.log('failed');
            }
        }
    }
    return false;
}