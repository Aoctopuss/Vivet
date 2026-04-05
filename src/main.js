import { fetchProduct } from './products.js'
import { inhCart, DisplayCart, UpdateCartBadge} from './cart.js';

inhCart();
fetchProduct();
UpdateCartBadge();

const Savedcart = JSON.parse(localStorage.getItem('userCart')) || [];
DisplayCart(Savedcart);



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
