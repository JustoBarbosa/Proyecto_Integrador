document.addEventListener("DOMContentLoaded", function() {
    const productosSelec = document.getElementById("productos-seleccionados");
    const finalizarCompra = document.getElementById("finalizar-compra");
    const eliminarCarrito = document.getElementById("eliminar-carrito");

    const productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (productosEnCarrito.length === 0) {
        productosSeleccionadosDiv.innerHTML = "<p>Su carrito está vacío</p>";
    } else {
        productosEnCarrito.forEach(id => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(response => response.json())
                .then(producto => {
                    const productoDiv = document.createElement("div");
                    productoDiv.classList.add("producto");
                    productoDiv.innerHTML = `
                        <h2>${producto.title}</h2>
                        <img src="${producto.image}" alt="${producto.title}">
                        <p>${producto.description}</p>
                        <p>Precio: $${producto.price}</p>
                    `;
                    productosSelec.appendChild(productoDiv);
                })
                .catch(error => {
                    console.error('Error al recuperar el producto:', error);
                });
        });
    }

    finalizarCompra.addEventListener("click", function() {
        localStorage.removeItem("carrito");
        alert("Gracias por su compra");
        window.location.href = "home.html";
    });

    eliminarCarrito.addEventListener("click", function() {
        localStorage.removeItem("carrito");
        alert("El carrito ha sido eliminado");
        window.location.reload(); 
    });
});
