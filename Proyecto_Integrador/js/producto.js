window.onload = function() {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('NombreProducto').innerText = product.title;
            document.getElementById('descripcionproducto').innerText = product.description;
            document.getElementById('precioproducto').innerText = `${product.price}$`;
            document.getElementById('imagenprducto').src = product.image;

            document.getElementById('carrito').addEventListener('click', function() {
                let cart = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
                cart.push(product.id);
                localStorage.setItem('carrito', JSON.stringify(cart));
                alert('Producto agregado al carrito');
            });
        })
        .catch(error => {
            console.log('Error: '+ error);
        });
    } else {
        console.log('Ningun producto seleccionado');
    }
};
