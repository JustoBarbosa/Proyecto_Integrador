document.getElementById('metodorecover').addEventListener('submit', function(event) {
event.preventDefault();
let email = document.getElementById('email').value;
let checkbox = document.getElementById('recoberCheckbox').checked;
let message = document.getElementById('message');
let loginLink = document.getElementById('login-link');
let recupero = document.querySelector (".recupero")
    if (email === '') {
        message.textContent = 'Por favor escriba su email.';
        message.className = 'error';
        loginLink.style.display = 'none';
    return;
} 
if (!checkbox) {
        message.textContent = 'Por favor acepte el campo: "Quiero recuperar mi contraseña"';
        message.className = 'error';
        loginLink.style.display = 'none';
    return;
} 
if (recupero){
    bien.textContent = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
    bien.className = 'success';
    loginLink.style.display = 'block';
    }
});