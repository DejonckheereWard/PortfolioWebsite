/* jshint esversion: 8 */

async function main() {
    console.debug("Loading index.js");

    // Add event listener to the nav toggle button to toggle navigation
    document.querySelector(".c-header__nav__toggle").addEventListener("click", function () {
        const navLinks = document.querySelector(".c-header__nav__list");
        navLinks.classList.toggle("show");

        const bars = document.querySelectorAll(".c-header__nav__item");
        bars.forEach(bar => bar.classList.toggle("change"));
    });
}