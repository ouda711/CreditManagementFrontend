let jwt = localStorage.getItem("jwt");
if (jwt == null) {
    window.location.href = '../../login.html'
}

function checkCustomerCredentials()
{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/credit-details");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", "Bearer "+jwt)
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            const objects = JSON.parse(this.responseText);
            if(objects.success == true){
                console.log(objects)
                document.getElementById('mySizeChartModal').style.display = "none";
            }else{
                console.log(objects)
                document.getElementById('mySizeChartModal').style.display = "block";
            }
        }
    }
}