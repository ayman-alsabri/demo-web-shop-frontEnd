let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    const cartItem = { item, price, quantity: 1 };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
