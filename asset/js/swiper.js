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
            },

            576: {
                fixedWidth: 60
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

        576: {
            perPage: 2
        },
        400: {
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

        576: {
            perPage: 2
        },
        400: {
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

        576: {
            perPage: 2
        },
        400: {
            perPage: 1
        }
    }

}).mount();
// slide discount
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


// slide trending

new Splide('#slide__fashion', {
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

        576: {
            perPage: 2
        },
        400: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__electronic', {
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

        576: {
            perPage: 2
        },
        400: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__toy__hobbies', {
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

        576: {
            perPage: 2
        },
        400: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__featured__product__grid', {
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

        576: {
            perPage: 1
        }

    }

}).mount();

new Splide('#slide__bestseller__grid', {
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

        576: {
            perPage: 1
        }
    }

}).mount();
new Splide('#slide__new__product__grid', {
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

        576: {
            perPage: 1
        }
    }

}).mount();

new Splide('#slide__brand', {
    perPage: 6,
    arrows: false,
    padding: 0,
    speed: 1400,
    pagination: false,
    rewind: true,
    breakpoints: {
        992: {
            perPage: 5
        },
        768: {
            perPage: 4
        },
        576: {
            perPage: 3
        },
        400: {
            perPage: 2
        }
    }

}).mount();