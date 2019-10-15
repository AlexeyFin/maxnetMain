$("body").children().each(function () {
    document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
});



$(document).ready(function(){


    $('#top_slider').slick({
        appendArrows: '.main_banner_arrows',
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        fade: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true

    });
    $('#phone_number,.phone_number') ? $('#phone_number,.phone_number').inputmask("+38 (099) 999-99-99", {clearIncomplete: true}) : '';
    $('#main_slider_wrap').slick({
        appendArrows: '.main_slider_arrows_wrap',
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        fade: true,
        infinite: false,
        draggable: false,
        autoplay: true
    });
    $('#about_slider_wrap').slick({
        appendArrows: '.slider_arrows_wrap',
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        fade: true,
        infinite: false,
        draggable: false
    });
    $('.partners_wrap').slick({
        arrows: false,
        slidesToShow: 8,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: false,
                    arrows: true,

                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },


        ]

    });
    $('#ssd_hosting_slider').slick({
        nextArrow: '<button class="slick-arrow-right  slick-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left  slick-arrow"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    autoplay: true,
                    infinite: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: false,
                    arrows: true,

                }
            },
            {
                breakpoint: 732,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    infinity: false

                }
            },


        ]

    });
    $('#sas_hosting_slider').slick({
        nextArrow: '<button class="slick-arrow-right  slick-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left  slick-arrow"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    autoplay: true,
                    infinite: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: false,
                    arrows: true,

                }
            },
            {
                breakpoint: 732,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    infinity: false

                }
            },


        ]

    });
    $('.custom_tooltip_price, .custom_tooltip_details, .custom_about_tooltip, .tooltip_label').tooltipster({
        contentCloning: true,
        theme: 'tooltipster-shadow',
        trigger: 'hover'
    });
    $('.internet-slider').slick({
        nextArrow: '<button class="slick-arrow-right  slick-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left  slick-arrow"><i class="fas fa-chevron-left"></i></button>',
        slidesToShow: 3,
        infinite: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    infinity: true
                }
            },
        ]

    });
    $('#video_tariff_slider').slick({
        slidesToShow: 4,
        infinite: false,
        nextArrow: '<button class="slick-arrow-right  slick-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left  slick-arrow"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    arrows: true

                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    infinity: true

                }
            }

        ]

    });
    $('#loyalty_slider').slick({
        slidesToShow: 3,
        infinite: false,
        nextArrow: '<button class="slick-arrow-right  slick-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left  slick-arrow"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: false,
                    arrows: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                    arrows: true

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    infinity: true

                }
            }

        ]

    });
    $('[data-toggle="tooltip"]').tooltip();
});

function toggle_check(elem) {
    let wrap = elem.closest('.checkbox_wrap_content');
    if (!wrap) {
        wrap = document.closest('.maxNet_radio_wrap')
    }
    if (elem.checked) {
        wrap.classList.add('checked')
    } else {
        wrap.classList.remove('checked')
    }
}
function slider_link(elem) {
    elem.checked ? window.location = elem.dataset['onlink'] : window.location = elem.dataset['offlink'];
}
document.querySelectorAll('a[href^="#"].slide').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});















































