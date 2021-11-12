var main = new Splide('#main-slider-modal-item1', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: true,
});

var thumbnails = new Splide('#thumbnail-slider-modal-item1', {
    fixedWidth: 115,
    rewind: true,
    pagination: false,
    focus: 'center',
    arrows: false,
    isNavigation: true,
    breakpoints: {
        992: {
            fixedWidth: 80
        },

        576: {
            fixedWidth: 60
        }
    }

});


main.sync(thumbnails);
main.mount();
thumbnails.mount();



var openPhoto = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [{
            src: '/asset/image/product/large-size/1.jpg',
            w: 600,
            h: 600
        },
        {
            src: '/asset/image/product/large-size/3.jpg',
            w: 600,
            h: 600
        },
        {
            src: '/asset/image/product/large-size/4.jpg',
            w: 600,
            h: 600
        },
        {
            src: '/asset/image/product/large-size/5.jpg',
            w: 600,
            h: 600
        }

    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

document.getElementsByClassName('zoom__plus')[0].onclick = openPhoto;