/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


//image gallery with filtering =================================
// Initiate Lightbox
$(function () {
    $('.gallery a').lightbox();
});

//selecting all required elements
const filterItem = document.querySelector(".objects");
const filterImg = document.querySelectorAll(".gallery .photo");

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("object")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data-name value is equal to images data-name value
                //or user selected item data-name value is equal to "all"
                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide"); //first remove the hide class from the image
                    image.classList.add("show"); //add show class in image
                } else {
                    image.classList.add("hide"); //add hide class in image
                    image.classList.remove("show"); //remove show class from the image
                }
            });
        }
    }
}
// End of image gallery with filtering ==========================
