export function UpdateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];
    const amount = document.querySelector("#cart-number");

    if (!amount) return;

    let total = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (total === 0) {
        amount.classList.add("hidden");
        amount.innerHTML = ""; 
    } else if (total > 0 && total <= 10) {
        amount.classList.remove("hidden");
        amount.innerText = total;
    } else if (total > 10) {
        amount.classList.remove("hidden");
        amount.innerText = `10+`;
    }
}

export function inhCart() {
    document.addEventListener("click", (e) => {
        if (e.target.matches("button[data-id]")) {
            const id = e.target.dataset.id;
            console.log("clicked product id:", id);
            saveToSession(id);
        }
    });
}

function saveToSession(id) {
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];

    const product = window.allProducts.find((p) => p.id == id);

    const existingItem = cart.find((item) => item.id == id);

    if (existingItem) {
        existingItem.quantity += 1;
        console.log("quanitity upated", existingItem.quantity);
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("userCart", JSON.stringify(cart));
    console.log("Added to cart", product.name);

    DisplayCart(cart);
    UpdateCartBadge();
}

export function DisplayCart(cart) {
    const display = document.querySelector("#cart-items");
    const Nodisplay = document.querySelector("#cart-container");

    if (!display || !Nodisplay) return;

    if (cart.length === 0) {
        Nodisplay.innerHTML = `<p    class="text-gray-500 font-sm"> je winkelwagen is leeg.</p>`;
        return;
    }
    display.innerHTML = "";
    cart.forEach((item) => {
        display.innerHTML += `
                <div class="flex justify-between items-start py-4 border-b">
                    <div>
                        <p class="font-semibold">${item.name}</p>
                        <p class="text-gray-500 text-sm">€${item.price} × ${item.quantity}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <p>€${item.price * item.quantity}</p>
                        <button data-id="${item.id}" class="remove-btn">✕</button>
                    </div>
                </div>`;
    });
}

// bestellen

document.addEventListener("click", (p) => {
    if (p.target.matches(".besteld")) {
        bestelling(p);
    }
});

export function bestelling(p) {
    const display = document.querySelector("#cart-container");
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];
    let bestelling = cart;
    cart = [];
    display.innerHTML = `
            <p class="font-bold text-3xl">Dankjewel voor je bestelling.</p>`;
    localStorage.setItem("userBestelling", JSON.stringify(bestelling));
}

// bestellen


// items verwijderen en de cart leegmaken

document.addEventListener("click", (a) => {
    if (a.target.matches(".empty")) {
        removeCart(a);
    }
});

function removeCart(a) {
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];

    cart = [];

    localStorage.setItem("userCart", JSON.stringify(cart));
    DisplayCart(cart);
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".remove-btn")) {
        const id = e.target.dataset.id;
        removeFromCart(id);
    }
});

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("userCart")) || [];

    cart = cart.filter((item) => item.id != id);

    localStorage.setItem("userCart", JSON.stringify(cart));
    DisplayCart(cart);
}

// items verwijderen en de cart leegmaken
