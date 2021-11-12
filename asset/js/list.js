new Splide('#slide__dimension', {
    perPage: 1,
    arrows: false,
    padding: 0,
    speed: 1400,
    pagination: true,
    rewind: true,
    breakpoints: {
        992: {
            perPage: 3
        },
        768: {
            perPage: 2
        },
        500: {
            perPage: 1
        }
    }

}).mount();

$('.sort').selectpicker();

$('.show__perpage').selectpicker();


var main = new Splide('#main-slider-modal-item1', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
});

var thumbnails = new Splide('#thumbnail-slider-modal-item1', {
    fixedWidth: 150,
    rewind: true,
    pagination: false,
    focus: 'center',
    arrows: false,
    isNavigation: true,
    breakpoints: {
        992: {
            fixedWidth: 100
        }
    }

});


main.sync(thumbnails);
main.mount();
thumbnails.mount();


$('.show__list').click(function() {

    if (!$('#list__product').hasClass('show__custom')) {
        $('#list__product').removeClass('fade__custom').addClass('show__custom');
        $('#grid__product').addClass('fade__custom').removeClass('show__custom');
        $(this).addClass('show__list__product__active');
        $('.show__grid').removeClass('show__list__product__active');
    }
});

$('.show__grid').click(function() {

    if (!$('#grid__product').hasClass('show__custom')) {
        $(this).addClass('show__list__product__active');
        $('.show__list').removeClass('show__list__product__active');
        $('#grid__product').removeClass('fade__custom').addClass('show__custom');
        $('#list__product').addClass('fade__custom').removeClass('show__custom');;
    }
});