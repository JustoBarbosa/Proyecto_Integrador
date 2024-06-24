window.onload = function(){
    fetch('https://fakestoreapi.com/products')
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        
        let accesorios = products.filter(product => product.category === 'jewelery');
        let ropaHombre = products.filter(product => product.category === "men's clothing");
        let ropaMujer = products.filter(product => product.category === "women's clothing");

        let accesorioscontainer = document.getElementById('accesorios')
        accesorioscontainer.innerHTML = ""
        if(accesorioscontainer){
            accesorios.forEach(product =>{
                let interior =`
                    <ul>
                        <li>
                            <h2>${product.title}</h2>
                            <img src="${product.image}" alt="${product.title}">
                            <li>${product.description}</li>
                            <p>${product.price}$</p>
                            <a href="detalle_producto.html?id=${product.id}">Ver detalles del producto</a>
                        </li>
                    </ul>
                `;
                accesorioscontainer.innerHTML += interior
                console.log(accesorioscontainer.innerHTML);
            ;
        })}
    
    })
    .catch(function(error){
        console.log('Error: ' + error);
    });
}
