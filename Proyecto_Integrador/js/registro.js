document.querySelector('.formregistro').addEventListener('submit', function(event){
    let campoEmail = document.getElementById('email')
    let campoContra = document.getElementById('contraseña')
    let campoRepetir = document.getElementById('repetirContra')
   let campoTC = document.getElementById('TC')

   let errorEmail = document.querySelector('.error')
   let errorContra = document.querySelector('.error2')
   let errorRepetir = document.querySelector('.error3')

   if(campoEmail.value === ''){
    event.preventDefault()
    errorEmail.textContent = 'por favor complete con su email'
   } else{
    errorEmail.textContent = ''
   }

   if(campoContra.value === ''){
    event.preventDefault()
    errorContra.textContent = 'por favor complete con su contraseña'
   } else if (campoContra.value.length < 6){
    event.preventDefault()
    errorContra.textContent = 'Ingrese al menos 6 caracteres'
   } else {
    errorContra.textContent = ''
   }
   if(campoRepetir.value === ''){
    event.preventDefault()
    errorRepetir.textContent = 'por favor rellenar este campo'
   } else if(campoRepetir.value !== campoContra.value){
    event.preventDefault()
    errorRepetir.textContent = 'Las contraseñas no coinciden'
   } else {
    errorRepetir.textContent = ''
   }

   if(!campoTC.checked){
    event.preventDefault()
    let mensaje = 'Debe aceptar los terminos y condiciones'
    alert(mensaje)
   }

   if(!errorEmail.textContent && !errorContra.textContent && !errorRepetir.textContent)
    this.sumbit()
})