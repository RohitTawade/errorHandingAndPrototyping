function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    };
}

var products = [
    { name: "shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Sunglasses", category: "Accessories" }
];

var clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);
