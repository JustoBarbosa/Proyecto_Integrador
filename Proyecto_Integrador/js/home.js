document.addEventListener("DOMContentLoaded",() =>{
    const apiURL = "https://fakestoreapi.com/products" ;

    const fetchProducts = async () => {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            renderProducts(data);  
        }
        catch (error){
            console.error(Error)
        }
    };
    fetchProducts();
});

//secciones del dom
const seccionelectronica = document.querySelector(".Electronica");
const seccionAccesorios = document.querySelector(".Accesorios");
const seccionHombre = document.querySelector(".Hombre");
const seccionMujer = document.querySelector(".Mujer");

const renderProducts = (products) => {
    products.forEach(products => {
        const productElement = createProductElement(product);

        switch (product.category) {
            case "Electronica":
                seccionelectronica.appendChild(productElement);
                break;
            case "Accesorios":
                seccionAccesorios.appendChild(productElement);
                break;
            case "Hombre":
                seccionHombre.appendChild(productElement);
                break;
            case "Mujer":
                seccionMujer.appendChild(productElement);
                break;
        }
    });
}