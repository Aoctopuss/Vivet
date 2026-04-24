import fetchProduct from "./products.js";
import { inhCart, DisplayCart, UpdateCartBadge } from "./cart.js";
import {
    displayBestelling,
    switching,
    deleteRow,
    editRow,
    displayandEditProduct,
    saveChanges,
    createNewProduct,
    validatePrice,
} from "./admin.js";

validatePrice();
inhCart();
fetchProduct();
UpdateCartBadge();
switching();
deleteRow();
editRow();
saveChanges();
createNewProduct();
displayandEditProduct();
if (document.querySelector("#displayOrder")) {
    console.log("Admin element found! Running function...");
    displayBestelling();
}

const Savedcart = JSON.parse(localStorage.getItem("userCart")) || [];
DisplayCart(Savedcart);

// navbar animation for scrolling
window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    const notification = document.querySelector("#notification");
    if (window.scrollY > 8) {
        notification.classList.add("sticky", "top-0", "z-50");
        notification.classList.remove("mt-2");
        nav.classList.add("sticky", "top-0", "z-0");
        nav.classList.remove("mt-2");
    } else {
        notification.classList.remove("sticky", "top-0", "z-50");
        notification.classList.add("mt-2");
        nav.classList.remove("sticky", "top-0", "z=0");
        nav.classList.add("mt-2");
    }
});

document.addEventListener("click", (e) => {
    if (e.target.matches(".add")) {
        const notification = document.querySelector("#notification");
        if (!notification);

        if (notification.classList.contains("not-empty")) {
            return;
        }

        notification.classList.add("not-empty");

            notification.innerHTML = `
            <div class="bg-black mt-2 w-64 h-24 border rounded-md top-2 absolute flex items-center font-semibold px-4 text-center shadow-lg">
                <p class="text-white text-sm">Je hebt een product toegevoegd aan de winkelwagen</p>
            </div>`;
            setTimeout(() => {
                notification.innerHTML = "";
                notification.classList.remove("not-empty");
            }, 2000);
            
        }
});


