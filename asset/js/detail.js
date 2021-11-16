$('#btn__all__categories').click(
    function() {
        let d = $('#list__all__categories').css('height');
        if (d == '0px')
            $('#list__all__categories').css({ height: '285px', border: '1px solid #eeeeee' });
        else
            $("#list__all__categories").animate({ height: "0px" }, function() {
                $(this).css('border', 'none')
            });


    },

);
var main = new Splide('#main-slider-detail-product', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: true,
});

var thumbnails = new Splide('#thumbnail-slider-detail-product', {
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
            src: 'asset/image/product/large-size/1.jpg',
            w: 600,
            h: 600
        },
        {
            src: 'asset/image/product/large-size/3.jpg',
            w: 600,
            h: 600
        },
        {
            src: 'asset/image/product/large-size/4.jpg',
            w: 600,
            h: 600
        },
        {
            src: 'asset/image/product/large-size/5.jpg',
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






new Splide('#slide__other__twelve', {
    perPage: 4,
    arrows: false,
    padding: 0,
    speed: 3000,
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

$('.modal__star__review .fa-star').hover(
    function() {

        var idexCurrent = $(this).index();

        var i;
        var parent = $(this).parent();
        var len = parent.find('.fa-star').length;
        // parent.css({ color: '#909090' });
        for (i = 0; i < len; i++) {
            parent.find('.fa-star').eq(i).css({ color: '#909090' }).removeAttr('data-star', idexCurrent);

        }

        for (i = 0; i <= idexCurrent; i++) {
            parent.find('.fa-star').eq(i).css({ color: '#343a40' })
        }

        $(this).attr('data-star', idexCurrent);
    }
);
$('#close__modal__review').click(function() {

    $("#write__review__modal .close").click();
})