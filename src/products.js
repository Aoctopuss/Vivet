export default function fetchProduct() {
    const display = document.querySelector("#display");
    if (!display) return;
    const saved = JSON.parse(localStorage.getItem("products"));

    if (!saved) {
        fetch("https://raw.githubusercontent.com/Aoctopuss/Vivet/refs/heads/main/db.json")
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("products", JSON.stringify(data.products));
                displayProducts(data.products);
            });
    } else {
        displayProducts(saved);
    }
}

function displayProducts(data) {
    window.allProducts = data;
    const display = document.querySelector("#display");
    display.innerHTML = "";
    data.forEach(product => {
        display.innerHTML += `
        <div class="w-full sm:w-auto pb-8">
            <div class="border rounded-lg w-full sm:w-[500px] bg-card py-6">
                <img src="${product.image}" class="w-full h-[350px] object-contain rounded-t-sm"/>
                <div class="p-3 bg-purple">
                    <p class="text-2xl font-semibold text-white">${product.name}</p>
                    <p class="text-sm font-semibold pt-3 text-white">€${product.price}</p>
                </div>
                <button data-id="${product.id}" class="add-to-cart add hover:bg-purple-hover bg-purple 
                hover:text-sky-400 text-white w-full rounded-b-sm p-3 text-sm font-semibold">Add to cart</button>
            </div>
        </div>`;
    });
}


