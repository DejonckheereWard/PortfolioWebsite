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

    // Add event listener to the nav links to close the nav bar
    document.querySelectorAll(".c-header__nav__item").forEach(item => {
        item.addEventListener("click", function () {
            const navLinks = document.querySelector(".c-header__nav__list");
            navLinks.classList.remove("show");

            const bars = document.querySelectorAll(".c-header__nav__item");
            bars.forEach(bar => bar.classList.remove("change"));

            const icon = document.querySelector(".c-header__nav__toggle span");
            icon.innerText = "menu";
        });
    });


    let slideShows = document.getElementsByClassName("c-slideshow");
    for (let i = 0; i < slideShows.length; i++) {
        let images = slideShows[i].getElementsByTagName("img");

        console.log("Adding event listener");
        for (let imgIdx = 0; imgIdx < images.length; imgIdx++) {
            images[imgIdx].addEventListener("animationend", function () {
                // Since the image is already part of this slide show, it is moved instead of copied
                // (moving it to the back of the list)
                slideShows[i].appendChild(images[0]);
            }, false);
        }

    }
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