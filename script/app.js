$(document).ready(function () {
    $("body").children().each(function() {
        document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });

    $('#phone_number').inputmask("+38 (099) 999-99-99", { clearIncomplete  :  true});
    $('#main_slider_wrap, #about_slider_wrap').slick({
        appendArrows: '.main_slider_arrows_wrap',
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        fade: true,
        infinite: false,
        draggable: false
    });
    $('.partners_wrap').slick({
        arrows: false,
        slidesToShow: 6,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true
    });
    $('#ssd_hosting_slider, #sas_hosting_slider').slick({
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        slidesToShow: 4,
        responsive:  [
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
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    arrows: false

                }
            },
            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    infinity: true

                }
            },


        ]

    });

    $('.custom_tooltip_price, .custom_tooltip_details, .custom_about_tooltip').tooltipster({
        contentCloning: true,
        theme: 'tooltipster-shadow',
        trigger: 'hover'
    });
    $('.internet-slider').slick({
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-arrow-left"></i></button>',
        slidesToShow: 3,
        infinite: false,
        responsive:  [
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
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
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
        responsive:  [
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
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    arrows: false

                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    infinity: true

                }
            },
            // {
            //     breakpoint: 375,
            //     settings: {
            //         arrow: false,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //
            //     }
            // }

        ]

    });

    $('[data-toggle="tooltip"]').tooltip()

    hide_tv_packages('web-tv')

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


const tv_form = document.forms['tv_package_select_form'];
const tv_packages = Array.from(document.querySelectorAll('.tv_package'));

tv_form.addEventListener('change', e => {
    hide_tv_packages(e.target.value)
});


const hide_tv_packages = function (type) {
    let packages = tv_packages.filter(item => {
        if (item.dataset['filter'].indexOf(type) + 1) {
            item.classList.remove('d-none');
            return item
        } else {
            item.classList.add('d-none')
        }
    });

    if (packages.length <= 1) {
        document.querySelector('.additional_packages_title').classList.add('d-none')
    } else {
        document.querySelector('.additional_packages_title').classList.remove('d-none')
    }
}

function toggle_check(elem) {
    let wrap = elem.closest('.checkbox_wrap_content');
    if (elem.checked){
        wrap.classList.add('checked')
    } else {
        wrap.classList.remove('checked')
    }
}
function slider_link(elem) {
    elem.checked? window.location = elem.dataset['onlink'] : window.location = elem.dataset['offlink'];
}
