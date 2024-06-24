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
                            <a href="index.html?id=${product.id}">Ver detalles del producto</a>
                        </li>
                    </ul>
                `;
                accesorioscontainer.innerHTML += interior
                console.log(accesorioscontainer.innerHTML);
            ;
        })}
    
        let ropaMujerContainer = document.getElementById('ropaMujeres');
        if (ropaMujerContainer) {
            ropaMujerContainer.innerHTML = "";
            ropaMujer.forEach(product => {
                let interior2 = `
                    <ul>
                        <li>
                            <h2>${product.title}</h2>
                            <img src="${product.image}" alt="${product.title}">
                            <p>${product.description}</p>
                            <p>${product.price}$</p>
                            <a href="index.html?id=${product.id}">Ver detalles del producto</a>
                        </li>
                    </ul>
                `;
                ropaMujerContainer.innerHTML += interior2;
            });
        }

        let ropaHombreContainer = document.getElementById('ropaHombre');
        if (ropaHombreContainer) {
            ropaHombreContainer.innerHTML = "";
            ropaHombre.forEach(product => {
                let interior3 = `
                    <ul>
                        <li>
                            <h2>${product.title}</h2>
                            <img src="${product.image}" alt="${product.title}">
                            <p>${product.description}</p>
                            <p>${product.price}$</p>
                            <a href="index.html?id=${product.id}">Ver detalles del producto</a>
                        </li>
                    </ul>
                `;
                ropaHombreContainer.innerHTML += interior3;
            });
        }
    })
    .catch(function(error){
        console.log('Error: ' + error);
    });
}
