window.onload = function() {
    let listaGorros = document.querySelector('.lista-gorros');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
       .then(response => {
            return response.json();
        })
        .then(function(data) {
            let productos = ""; 

            for (let i = 0; i < data.length; i++) {
                let producto = data[i];


                productos += `
                    <li class="producto">
                        <h2>${producto.title}</h2>
                        <img src="${producto.image}" alt="${producto.nombre}">
                        <section class="texto">
                            <p>${producto.description}</p>
                            <p>${producto.price}$</p>
                            <a href="./index.html?id=${producto.id}">Ver detalles del producto</a>
                        </section>
                    </li>
                `;
            }


            listaGorros.innerHTML = productos;
        })
        .catch(error => {
            console.error('Error al cargar los productos: ' + error);
        });
    }
}
