// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  //console.log('Rendering products...'); // Check if this function gets called
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

document.addEventListener('click', function (event) {
  if (event.target.className === 'add-to-cart-btn') {
    addToCart(event.target.getAttribute('data-id'));
  }
});

const clearCartButton = document.getElementById("clear-cart-btn");
clearCartButton.addEventListener('click', clearCart);
const cartList = document.getElementById("cart-list");

function renderCart() {
  cartList.innerHTML = ''; // Clear the cart list before re-rendering
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index); // Use index to identify the item to remove
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (product) {
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the specified index
  sessionStorage.setItem('cart', JSON.stringify(cart)); // Update session storage
  renderCart(); // Re-render the cart to reflect the change
}


// Clear cart
function clearCart() {
	
  cart.length = 0; // Clears the cart array
  sessionStorage.setItem('cart', JSON.stringify(cart)); // Update session storage
  renderCart(); // Re-render the empty cart
}


window.onload = function() {
  // DOM elements
  const productList = document.getElementById("product-list");

  // Render product list
  function renderProducts() {
    products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
      productList.appendChild(li);
    });
  }

  // Initial render
  renderProducts();
	renderCart();
};
