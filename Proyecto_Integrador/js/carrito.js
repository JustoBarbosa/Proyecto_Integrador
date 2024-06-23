document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.getElementById('productos-seleccionados');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');

    function obtenerProductosDelCarrito() {
        const productos = JSON.parse(localStorage.getItem('carrito')) || [];
        return productos;
    }

    function mostrarProductos(productos) {
        if (productos.length === 0) {
            productosContainer.innerHTML = "<p>Su carrito está vacío</p>";
        } else {
            productos.forEach(id => {
                obtenerProductoDeAPI(id).then(producto => {
                    const productoDiv = document.createElement('div');
                    productoDiv.classList.add('producto');
                    productoDiv.innerHTML = `
                        <h3>${producto.nombre}</h3>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.precio}</h4>
                    `;
                    productosContainer.appendChild(productoDiv);
                });
            });
        }
    }

    async function obtenerProductoDeAPI(id) {

        return {
            nombre: "Producto de prueba",
            imagen: "./img/producto.png",
            precio: "$45000"
        };
    }

    finalizarCompraBtn.addEventListener('click', function() {
        localStorage.removeItem('carrito');
        alert("Gracias por su compra!");
        window.location.href = "home.html";
    });

    const productos = obtenerProductosDelCarrito();
    mostrarProductos(productos);
});
document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.getElementById('productos-seleccionados');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');

    function obtenerProductosDelCarrito() {
        const productos = JSON.parse(localStorage.getItem('carrito')) || [];
        return productos;
    }

    function mostrarProductos(productos) {
        if (productos.length === 0) {
            productosContainer.innerHTML = "<p>Su carrito está vacío</p>";
        } else {
            productos.forEach(id => {
                obtenerProductoDeAPI(id).then(producto => {
                    const productoDiv = document.createElement('div');
                    productoDiv.classList.add('producto');
                    productoDiv.innerHTML = `
                        <h3>${producto.nombre}</h3>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.precio}</h4>
                    `;
                    productosContainer.appendChild(productoDiv);
                });
            });
        }
    }

    async function obtenerProductoDeAPI(id) {

        return {
            nombre: "Producto de prueba",
            imagen: "./img/producto.png",
            precio: "$45000"
        };
    }

    finalizarCompraBtn.addEventListener('click', function() {
        localStorage.removeItem('carrito');
        alert("Gracias por su compra!");
        window.location.href = "home.html";
    });

    const productos = obtenerProductosDelCarrito();
    mostrarProductos(productos);
});
