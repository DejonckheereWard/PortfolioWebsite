// Common functions used
/* jshint esversion: 8 */

function main() {
    console.warn("Common main function, override this in the non-common js file");
}

window.addEventListener("DOMContentLoaded", function (e) {
    // Fires when website is fully loaded
    console.debug("DOM fully loaded and parsed");

    if (typeof main === "function") {
        main();
    }
});