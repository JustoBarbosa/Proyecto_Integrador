

document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        const welcomeMessage = document.createElement('span');
        welcomeMessage.textContent = `Bienvenido: ${userEmail}`;

        const logoutLink = document.createElement('a');
        logoutLink.textContent = 'Logout';
        logoutLink.href = '#';
        logoutLink.style.marginLeft = '10px';
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            window.location.reload();
        });

        const header = document.querySelector('header');
        header.appendChild(welcomeMessage);
        header.appendChild(logoutLink);

        const loginLink = document.querySelector('.login-header');
        const registroLink = document.querySelector('.registro-header');
        
        if (loginLink) {
            loginLink.style.display = 'none';
        }

        if (registroLink) {
            registroLink.style.display = 'none';
        }
    }
});
