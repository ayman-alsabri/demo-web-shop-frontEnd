let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add(`cart-item`);
        itemElement.id = `${index}`;
        itemElement.innerHTML = `
            <h3>${item.item}</h3>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.innerText = total;
}

function removeFromCart(index) {
    const length = cart.length
    const cartItem = document.getElementById(`${index}`)
    const animationHight = cartItem.offsetHeight;
    cartItem.style.transform = `translateY(-${animationHight + 20}px)`;
    cartItem.style.animation = 'slideout 0.5s ease reverse';
    for (let ind = index + 1; ind < length; ind++) {
        const cartItem = document.getElementById(`${ind}`)
        cartItem.style.transform = `translateY(-${animationHight + 20}px)`;
        cartItem.style.animation = 'slideup 0.5s ease reverse';

    }
    setTimeout(() => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }, 480);
}

function checkout() {
    alert('Your order has been placed!');
    localStorage.clear();
    cart = [];
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', displayCartItems);
