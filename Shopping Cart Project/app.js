const loadAllproduct = () =>
{
    fetch('https://fakestoreapi.com/products')

        .then(res => res.json())

        .then((data) =>
        {
            dispalyProduct(data);
        });
};


const dispalyProduct = (Products) =>
{
    const productContainer =
        document.getElementById("product-container");


    Products.forEach((Product) =>
    {
        const div = document.createElement("div");

        div.classList.add("card");


        div.innerHTML = `
            <img 
                class="card-img" 
                src="${Product.image}" 
                alt=""
            >

            <h5>${Product.title}</h5>

            <h3>Price: $${Product.price}</h3>

            <p>${Product.description.slice(0, 80)}...</p>

            <button onclick="singleProduct(${Product.id})">
                Details
            </button>

            <button onclick="handleAddToCart('${Product.title.slice(0, 12)}', ${Product.price})">
                Add to cart
            </button>
        `;


        productContainer.appendChild(div);
    });
};



const handleAddToCart = (name, price) =>
{
    const cartCount =
        document.getElementById("count").innerText;


    let convertCount = parseInt(cartCount);


    convertCount = convertCount + 1;


    document.getElementById("count").innerText =
        convertCount;


    const container =
        document.getElementById("cart-main-container");


    const div = document.createElement("div");

    div.classList.add("cart-info");


    div.innerHTML = `
        <p>${name}</p>

        <h3 class="price">${price}</h3>
    `;


    container.appendChild(div);


    UpdateTotal();
};



const UpdateTotal = () =>
{
    const allPrices =
        document.getElementsByClassName("price");


    let total = 0;


    for (const element of allPrices)
    {
        total =
            total + parseFloat(element.innerText);
    }


    document.getElementById("total").innerText =
        "$" + total.toFixed(2);
};



const singleProduct = (id) =>
{
    fetch(`https://fakestoreapi.com/products/${id}`)

        .then(response => response.json())

        .then(product =>
        {
            alert(
                "Product Name: " + product.title +
                "\n\nPrice: $" + product.price +
                "\n\nCategory: " + product.category +
                "\n\nRating: " + product.rating.rate
            );
        });
};



loadAllproduct();