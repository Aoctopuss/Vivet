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
    let cart = JSON.parse(sessionStorage.getItem('userCart')) || [];
    
    if (!cart.includes(id)) {
        cart.push(id);
        sessionStorage.setItem('userCart', JSON.stringify(cart));
        console.log("Saved to session:", id);
    }
}