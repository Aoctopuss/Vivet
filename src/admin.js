export function displayBestelling() {
    const bestelling = JSON.parse(localStorage.getItem('userBestelling'));
    const totalPrice = localStorage.getItem('totalPrice');
    const time = localStorage.getItem('Date');
    const bestellingTime = new Date(Number(time)).toLocaleString();
    const display = document.querySelector("#displayOrder");


    console.log("Data found:", bestelling);
    console.log("Display element:", display);

    if (!bestelling || !display) return;

    display.innerHTML = "";

    bestelling.forEach(producten => {
        display.innerHTML += `
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    ${producten.id}
                </th>
                <td class="px-6 py-4">
                    €${totalPrice}
                </td>
                <td class="px-6 py-4">
                    ${bestellingTime}
                </td>
            </tr>`
    });
    console.log("Function is running");
}


export function switching() {
    const buttonOrder = document.querySelector("#buttonOrder");
    const buttonProducts = document.querySelector("#buttonProducts");
    const tableOrder = document.querySelector("#tableOrder");
    const tableProducts = document.querySelector("#tableProducts");

    buttonProducts.addEventListener('click', () => {
        tableProducts.classList.remove("hidden");
        tableOrder.classList.add("hidden");

        buttonProducts.classList.add("bg-[#00D4FF]");
        buttonOrder.classList.remove("bg-[#00D4FF]");

        fetchProductsAdmin();
    });

    buttonOrder.addEventListener('click', () => {
        tableOrder.classList.remove("hidden");
        tableProducts.classList.add("hidden");

        buttonOrder.classList.add("bg-[#00D4FF]");
        buttonProducts.classList.remove("bg-[#00D4FF]");

    })
}


function fetchProductsAdmin() {
    const displayProducts = document.querySelector("#displayProducts");
    fetch('http://localhost:3000/products')
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach(product => {
                displayProducts.innerHTML += `
                <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    ${product.id}
                </th>
                <td class="px-6 py-4">
                    ${product.name}
                </td>
                <td class="px-6 py-4">
                    ${product.price}
                </td>
                <td class="px-6 py-4">
                    ${product.image}
                </td>
                <td>
                <button id="${product.id}" class="text-blue-500 hover:text-[#010a3a]">Edit</button>
                </td>
                <td>
                <button id="${product.id}" class="text-red-500 hover:text-[#480000]">Remove</button>
                </td>
            </tr>`;
            });
        })
}


function createNewProduct() {
    const addProduct = document.querySelector("#addProduct");

    addProduct.addEventListener("click", () => {
        
    })
}