function logout() {
    localStorage.removeItem("jwt");
    window.location.href = '../../index.html'
  }