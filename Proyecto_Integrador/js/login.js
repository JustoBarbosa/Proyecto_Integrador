document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email) {
        alert('Por favor complete el campo email');
        return;
    }

    if (!password) {
        alert('Por favor complete el campo contraseña');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }


    localStorage.setItem('userEmail', email);


    window.location.href = './home.html';
});
