window.onload = function(){
    fetch('https://fakestoreapi.com/products')
    .then(function(response){
        return response.json()
    })
    .then(function(informacion){
        console.log(informacion);
    })
}