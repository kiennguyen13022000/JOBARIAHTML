document.addEventListener('DOMContentLoaded', function() {
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



});

new Splide('#slide__newarribar', {
    perPage: 4,
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
        576: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__bestseller', {
    perPage: 4,
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
        576: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__feature__product', {
    perPage: 4,
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
        576: {
            perPage: 1
        }
    }

}).mount();

new Splide('.slide__discount', {
    perPage: 2,
    arrows: false,
    speed: 4000,
    perMove: 1,
    forcus: true,
    padding: 0,
    breakpoints: {

        576: {
            perPage: 1
        }
    }


}).mount();