
const display = document.getElementById("display");



function fetchProduct() {
    fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(data => {
           data.forEach(product => {
            display.innerHTML += `
            <div class="pb-8"> 
            <div class="border rounded-lg overflow-hidden w-full sm:w-[500px] ">
            <img src="${product.image}" class="w-full h-[450px] object-cover bg-gray-200"/>
            <div class="p-3 ">
            <p class="text-black text-2xl font-semibold">${product.name}</p>
            <p class="text-gray-600 text-sm font-semibold pt-3">${product.price}</p>
            </div>
            <button id="addCard" class="bg-black text-blue-300 w-full p-3 text-sm font-semibold">Add to card</button>
            </div>
            </div>`
           });
           
        })
}

fetchProduct();