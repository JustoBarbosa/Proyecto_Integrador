let linkLogout = document.getElementById('logout-link')

if(linkLogout){
    linkLogout.addEventListener('click', () =>
    localStorage.removeItem('username'),
    window.location.reload()
)}

