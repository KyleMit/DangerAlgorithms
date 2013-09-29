$(function () {
    // activate scroll spy
    $('body').scrollspy({
        target: '#SiteNavBar'
    });


    // when menu item clicked
    $('.nav li a').click(function () {
        // close navbar if open
        //$(".navbar-toggle:not(.collapsed)").click();
        $("#NavBarLinks").removeClass("in").addClass("collapse");
    });
    
    // when menu item clicked
    $("a[href^='#']").click(function () {
        // scroll to position
        navigateToElement(this);
    });


   
});

function navigateToElement(pageLink) {
    // get href attribute
    var idSelector = $(pageLink).attr('href');
    // scroll down page
    scrollToElement(idSelector);
    // reset url hash
    setHash(idSelector);
    // return false so we don't refresh
    //return false;
}

function scrollToElement(idSelector) {
    $('html, body').animate({
        scrollTop: $(idSelector).offset().top
    }, 1000);
}

function setHash(hash) {
    window.location.hash = hash;
}