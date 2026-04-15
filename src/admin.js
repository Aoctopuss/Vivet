export function displayBestelling() {
    const bestelling = JSON.parse(localStorage.getItem("userBestelling"));
    const totalPrice = localStorage.getItem("totalPrice");
    const time = localStorage.getItem("Date");
    const display = document.querySelector("#displayOrder");

    if (!bestelling || !display) return;

    let allOrders = JSON.parse(localStorage.getItem("all_orders")) || [];

    if (!allOrders.some((order) => order.date === time)) {
        allOrders.push({
            id: allOrders.length,
            bestelling,
            totalPrice,
            date: time,
        });
        localStorage.setItem("all_orders", JSON.stringify(allOrders));
    }

    display.innerHTML = "";

    allOrders.forEach((order) => {
        display.innerHTML += `
        <tr class="bg-neutral-primary border-b border-default">
            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                ${order.id}
            </th>
            <td class="px-6 py-4">
                ${order.bestelling.map((p) => `${p.quantity}x ${p.name}`).join("<br>")}
            </td>
            <td class="px-6 py-4 font-bold">
                €${order.totalPrice}
            </td>
            <td class="px-6 py-4">
                ${new Date(Number(order.date)).toLocaleString()}
            </td>
        </tr>`;
    });
}

export function switching() {
    const buttonOrder = document.querySelector("#buttonOrder");
    const buttonProducts = document.querySelector("#buttonProducts");
    const tableOrder = document.querySelector("#tableOrder");
    const tableProducts = document.querySelector("#tableProducts");

    if (!buttonOrder || !buttonProducts || !tableOrder || !tableProducts) return;
    fetchProductsAdmin();

    buttonProducts.addEventListener("click", () => {
        tableProducts.classList.remove("hidden");
        tableOrder.classList.add("hidden");
        buttonProducts.classList.add("bg-[#00D4FF]");
        buttonOrder.classList.remove("bg-[#00D4FF]");
        fetchProductsAdmin();
    });

    buttonOrder.addEventListener("click", () => {
        tableOrder.classList.remove("hidden");
        tableProducts.classList.add("hidden");
        buttonOrder.classList.add("bg-[#00D4FF]");
        buttonProducts.classList.remove("bg-[#00D4FF]");
    });
}

function fetchProductsAdmin() {
    const displayProducts = document.querySelector("#displayProducts");
    if (!displayProducts) return;

    displayProducts.innerHTML = "";

    const saved = JSON.parse(localStorage.getItem("products"));

    if (!saved) {
        fetch("http://localhost:3000/products")
            .then((resp) => resp.json())
            .then((data) => {
                localStorage.setItem("products", JSON.stringify(data));
                renderProductTable(data);
            });
    } else {
        renderProductTable(saved);
    }
}

function renderProductTable(data) {
    window.allProducts = data;
    const displayProducts = document.querySelector("#displayProducts");
    displayProducts.innerHTML = "";
    data.forEach((product) => {
        displayProducts.innerHTML += `
        <tr class="bg-neutral-primary border-b border-default">
            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                ${product.id}
            </th>
            <td class="px-6 py-4">
                ${product.name}
            </td>
            <td class="px-6 py-4">
                €${product.price}
            </td>
            <td class="px-6 py-4">
                ${product.image}
            </td>
            <td>
                <button data-id="${product.id}" class="edit-row text-blue-500 hover:text-[#010a3a]">Edit</button>
            </td>
            <td>
                <button data-id="${product.id}" class="remove-row text-red-500 hover:text-[#480000]">Remove</button>
            </td>
        </tr>`;
    });
}

export function editRow() {
    document.addEventListener("click", (e) => {
        if (e.target.matches(".edit-row")) {
            const productId = e.target.dataset.id;
            const fullProduct = window.allProducts.find(
                (p) => p.id == productId,
            );
            if (fullProduct) {
                localStorage.setItem("product", JSON.stringify(fullProduct));
                window.location.href = "edit-product.html";
            }
        }
    });
}

export function deleteRow() {
    document.addEventListener("click", (e) => {
        if (e.target.matches(".remove-row")) {
            const productId = e.target.dataset.id;
            const row = e.target.closest("tr");

            if (row) {
                row.remove();

                let products =
                    JSON.parse(localStorage.getItem("products")) || [];
                products = products.filter((p) => p.id != productId);
                localStorage.setItem("products", JSON.stringify(products));
                console.log("Row removed");
            }
        }
    });
}

export function displayandEditProduct() {
    const product = JSON.parse(localStorage.getItem("product")) || [];
    const display = document.querySelector("#dispayingEdit");

    if (!display || !product) return;

    display.innerHTML = `
        <form class="max-w-sm mx-auto space-y-4">
            <a class="text-cyan-400 underline" href="admin.html">Ga terug</a>
            <h1 class="font-bold">Edit product</h1>
            <div>
                <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Naam</label>
                <input placeholder="${product.name}" type="text" id="edit-name" 
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base 
                focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" required />
            </div>
            <div>
                <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Prijst</label>
                <input placeholder="${product.price}" type="text" id="edit-price" 
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm 
                rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
            </div>
            <div>
                <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Afbeelding</label>
                <input placeholder="${product.image}" type="text" id="edit-image" 
                class="bg-neutral-secondary-medium border border-default-medium 
                text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
                <img src=${product.image}>
            </div>
            <div class="mb-4">
            <button
                        id="SaveChanges"
                        type="button"
                        class="text-white bg-[#00D4FF] hover:bg-sky-900 rounded-lg
                        border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                    >
                        edit
                    </button>
            </div>
        </form>
        `;
}

document.addEventListener("click", (e) => {
    if (e.target.matches("#reset")) {
        fetch("http://localhost:3000/products")
            .then((resp) => resp.json())
            .then((data) => {
                localStorage.setItem("products", JSON.stringify(data));
                renderProductTable(data);
            });
    }
});

export function saveChanges() {
    document.addEventListener("click", (e) => {
        if (e.target.matches("#SaveChanges")) {
            const product = JSON.parse(localStorage.getItem("product"));
            const newName =
                document.querySelector("#edit-name").value || product.name;
            const newPrice =
                document.querySelector("#edit-price").value || product.price;
            const newImage =
                document.querySelector("#edit-image").value || product.image;

            product.name = newName;
            product.price = newPrice;
            product.image = newImage;

            let products = JSON.parse(localStorage.getItem("products")) || [];
            const index = products.findIndex((p) => p.id == product.id);

            if (index !== -1) {
                products[index] = product;
                localStorage.setItem("products", JSON.stringify(products));
            }

            localStorage.setItem("product", JSON.stringify(product));
            window.location.href = "admin.html";
            console.log("Product updated", product);
        }
    });
}

export function createNewProduct() {
    const addProduct = document.querySelector("#addNewProduct");
    if (!addProduct) return;

    addProduct.addEventListener("click", () => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const addName = document.querySelector("#addName").value;
        const addPrice = document.querySelector("#addPrice").value;
        const addImage = document.querySelector("#addImage").value;

        const newId =
            products.length > 0
                ? Math.max(...products.map((p) => p.id)) + 1
                : 1;

        const newProduct = {
            id: newId,
            name: addName,
            price: addPrice,
            image: addImage,
        };

        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
        console.log("added new product", newProduct);
        window.location.href = "admin.html";
    });
}
