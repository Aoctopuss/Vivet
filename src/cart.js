export function inhCart() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('button[data-id]')) {
            const id = e.target.dataset.id
            console.log('clicked product id:', id)
            saveToSession(id);
        }
    });
}

function saveToSession(id) {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];

    const product = window.allProducts.find(p => p.id == id);

    const existingItem = cart.find(item => item.id == id);
    
    if (existingItem) {

        
        existingItem.quantity += 1;
        console.log("quanitity upated", existingItem.quantity);
        
    } else {    
        cart.push({ ...product, quantity: 1});
    }

    localStorage.setItem('userCart', JSON.stringify(cart));
    console.log("Added to cart", product.name);
}