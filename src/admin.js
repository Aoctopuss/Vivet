export function displayBestelling() {
    const bestelling = JSON.parse(localStorage.getItem('userBestelling'));
    const totalPrice = localStorage.getItem('totalPrice');
    const time = localStorage.getItem('Date');
    const bestellingTime = new Date(Number(time)).toLocaleString();
    const display = document.querySelector("#displayOrders");


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
                    ${totalPrice}
                </td>
                <td class="px-6 py-4">
                    ${bestellingTime}
                </td>
            </tr>`
    });
}