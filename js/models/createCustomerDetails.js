var jwt = localStorage.getItem("jwt");

function createCustomerDetails() {
    const limit = document.getElementById("limit").value;
    const terms = document.getElementById("terms").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/credit-details");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", "Bearer "+jwt)
    xhttp.send(JSON.stringify({
        "limit" : limit,
        "term" : terms
    }));

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            const objects = JSON.parse(this.responseText);
            console.log(objects.success);
            if(objects.success == true){
                console.log(objects)
            }else{
                console.log('failed');
            }
        }
    }
    return false;
}