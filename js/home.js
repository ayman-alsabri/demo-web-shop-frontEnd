document.getElementById('exploreBtn').addEventListener('click', function () {
    const productsContainer = document.getElementById('productsContainer');
    const isSignedUp = true; 

    if (!isSignedUp) {
        window.location.href = "login.html";  
    } else {
        productsContainer.scrollIntoView({ behavior: 'smooth' });
    }
});
