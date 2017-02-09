$(document).ready(init);

function windowWidth() {
    return $(window).width();
}

function scroll() {
    $(".cover-anchor").click(function () {
        var section = $(this).parents('section');
        if (windowWidth() > 767) {
            var nextSection = section.next();
            $(nextSection).addClass('activate-section');
            $(section).removeClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: section.next().offset().top
            }, 1000);
        }
    });
}

function openSection() {
    $('.open-section').click(function() {
        var target = $(this).data('target');
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function closeSection() {
    $('.close-section').click(function() {
        var section = $(this).parents('section').attr('id');
        $('input#menu-' + section).prop('checked', true);
        if (windowWidth() > 767) {
            $('#'+section).removeClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#menu').offset().top
            }, 1000);
        }
    });
}

function scrollTo() {
    $('.link-to').click(function () {
        var target = $(this).data('target');
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function carousel() {
    $('.carousel').carousel({
        pause: true,
        interval: false
    });
}

function check() {
    $(".menu-ul .check-list [type=checkbox]").on('click', function () {
        $(this).prop('checked', true);
    });
}

function disableCheckbox() {
    $(".check-list [type=checkbox]").on('click', function (e) {
        if ($(this).closest('section').attr('id') !== "contact") {
            e.preventDefault();
        }
    });
}

function carouselTransition() {
    $('.carousel').on('slide.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        if (carouselItem.index() > 0) {
            var lastCarouselItem = carouselItem.prev();
            if (lastCarouselItem.hasClass('off')) {
                lastCarouselItem.removeClass('off');
            }
        }
        carouselItem.removeClass('off');
    });
    $('.carousel').on('slid.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        carouselItem.addClass('off');
    });
}

function checkCover() {
    var checkboxes = $(".cover-ul [type=checkbox]");
    checkboxes.each(function(index) {        
        var checkbox = $(this);
        var t = setTimeout(function() { 
            checkbox.prop('checked', true);
        }, 400 * index);        
    });
}

function scrollFromCoverToMenu() {
    $("#cover").on('click keydown', function(e) {
        $('html, body').animate({
            scrollTop: $('#menu').offset().top
        }, 1000, function() {
            $("#cover").css('display', 'none');
            $("body").scrollTop(0);
            if (windowWidth() > 767) {
                $(".menu").css('position', 'fixed');
            }
        });
    });
}


function init() {
    scroll();
    carousel();
    disableCheckbox();
    checkCover();
    scrollTo();
    carouselTransition();
    check();
    scrollFromCoverToMenu();
    openSection();
    closeSection();
}