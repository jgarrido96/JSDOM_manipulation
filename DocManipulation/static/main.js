
// Task 1:Create an array containing information about different products, including their names, prices, and descriptions.



let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


// Task 2: Write a function to display the product information on the webpage dynamically.

function getAttributes() {
    return [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful computing on the go",
        icon: "../static/images/Laptop-icon.png"
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Stay connected wherever you are",
        icon: "../static/images/smartphone-icon.jpg"
    },
    {
        name: "Headphones",
        price: 149.99,
        description: "Immersive audio experience",
        icon: "../static/images/headphones-icon.jpg"
    }

]}

console.log(getAttributes())
function displayStore(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const display = document.querySelector('.product-display');
    if (!display) {
        console.error("Element with class 'product-display' not found.");
        return;
    }

    const storeInventory = getAttributes();
    storeInventory.forEach(product=>{
        const card = `
            <div class="card col-md-3 col-12 rounded p-2">
            <img src="${product.icon}" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                </div>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$${product.price}</li>
                    <li class="list-group-item">${product.description}</li>
                </ul>
            </div>`;

        display.insertAdjacentHTML("beforeend", card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', displayStore);
});


// Task 3: Implement an event listener to trigger the display of products when the page loads.

document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to our Store!")
})
