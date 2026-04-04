

export function fetchProduct() {
    const display = document.querySelector("#display");
    fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach((product) => {
                display.innerHTML += `
            <div class="w-full sm:w-auto pb-8">
                <div class="border rounded-lg w-full sm:w-[500px] bg-[#121212] py-6">
                    <img src="${product.image}" class="w-full h-[350px] object-contain bg-grey-600 rounded-t-sm"/>
                    <div class="p-3 bg-[#1A1A2E]">
                        <p class="text-2xl font-semibold text-white">${product.name}</p>
                        <p class="text-sm font-semibold pt-3 text-white">${product.price}</p>
                    </div>
                    <button data-id="${product.id}" class="bg-[#6B21A8] text-white w-full rounded-sm p-3 text-sm font-semibold">Add to card</button>
                </div>
            </div>`;
            });
        });
}