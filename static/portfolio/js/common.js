// Common functions used
/* jshint esversion: 8 */

function common_main() {
    // Add event listener to the nav toggle button to toggle navigation
    document.querySelector(".c-header__nav__toggle").addEventListener("click", function () {
        const navLinks = document.querySelector(".c-header__nav__list");
        navLinks.classList.toggle("show");

        const bars = document.querySelectorAll(".c-header__nav__item");
        bars.forEach(bar => bar.classList.toggle("change"));

        const icon = document.querySelector(".c-header__nav__toggle span");
        icon.innerText = icon.innerText === "menu" ? "close" : "menu";
    });

}

function main() {
    console.warn("Common main function, override this in the non-common js file");

}


window.addEventListener("DOMContentLoaded", function (e) {
    // Fires when website is fully loaded
    console.debug("DOM fully loaded and parsed");
    common_main();
    if (typeof main === "function") {
        main();
    }
});