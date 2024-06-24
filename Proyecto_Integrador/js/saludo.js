document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        const welcomeMessage = document.createElement('span');
        welcomeMessage.textContent = `Bienvenido: ${userEmail}`;

        const header = document.querySelector('header');
        header.appendChild(welcomeMessage);


        const loginLink = document.querySelector('.login-header');
        const registroLink = document.querySelector('.registro-header');
        
        if (loginLink) {
            loginLink.style.display = 'none';
        }

        if (registroLink) {
            registroLink.style.display = 'none';
        }
    }
    const logoutLink = document.createElement('a');
    logoutLink.textContent = 'Logout';
    logoutLink.href = '#';
    logoutLink.style.marginLeft = '10px';
    logoutLink.id = 'logout-link';

    header.appendChild(logoutLink);
});
