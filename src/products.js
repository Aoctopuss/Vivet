

export function fetchProduct() {
    const display = document.querySelector("#display");
    if (!display) return;
    fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((data) => {

            window.allProducts = data;
            data.forEach((product) => {
                display.innerHTML += `
            <div class="w-full sm:w-auto pb-8">
                <div class="border rounded-lg w-full sm:w-[500px] bg-[#121212] py-6">
                    <img src="${product.image}" class="w-full h-[350px] object-contain bg-grey-600 rounded-t-sm"/>
                    <div class="p-3 bg-[#6B21A8]">
                        <p class="text-2xl font-semibold text-[#E8E8E8]">${product.name}</p>
                        <p class="text-sm font-semibold pt-3 text-[#E8E8E8]">${product.price}</p>
                    </div>
                    <button data-id="${product.id}" class="hover:bg-[#7C3AED] bg-[#6B21A8] hover:text-[#00D4FF] text-[#E8E8E8] w-full rounded-b-sm p-3 text-sm font-semibold">Add to card</button>
                </div>
            </div>`;
            });
        });
}