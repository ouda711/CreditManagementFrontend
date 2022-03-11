function logout() {
    localStorage.removeItem("jwt");
    window.location.href = '../../index.html'
}

let username = localStorage.getItem("username")
let adminName = document.getElementsByClassName("admin_name");
adminName.innerHtml += username