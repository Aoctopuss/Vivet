import { fetchProduct } from './products.js'
import { inhCart } from './cart.js';

inhCart();
fetchProduct();



// navbar animation for scrolling
window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    if (window.scrollY > 8) {
        nav.classList.add("sticky", "top-0");
        nav.classList.remove("mt-2");
    } else {
        nav.classList.remove("sticky", "top-0");
        nav.classList.add("mt-2");
    }
});
