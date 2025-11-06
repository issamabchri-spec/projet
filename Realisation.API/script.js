// Sample JSON data
const products = [
    { id: 1, name: "Samsung Phone", category: "electronics", price: 2000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "White Shirt", category: "clothes", price: 150, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Moroccan Novel", category: "books", price: 50, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Laptop", category: "electronics", price: 5000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Blue Jeans", category: "clothes", price: 300, image: "https://via.placeholder.com/150" }
];

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');

// Function to display products
function displayProducts(items) {
    productContainer.innerHTML = '';
    items.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>price: ${product.price} </p>
            <p>category: ${product.category}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Initial display
displayProducts(products);

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Filter functionality
filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
});
