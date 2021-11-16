$(document).ready(function() {
    $('.blog_item').hover(function() {
            $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right')
        },
        function() {
            $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down')
        });

    $('.shop__categories__item').hover(
        function() {
            $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right')
        },
        function() {
            $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down')
        }
    )

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

    // nav__menu

    $('#accordion .nav-link').click(function() {
        // if($('#accordion').length)
        let thisClick = $('#accordion .fa').index($(this).find('.fa'));

        $('#accordion .fa').each(function() {
            // console.log($('#accordion .fa').index(this));
            if (thisClick != $('#accordion .fa').index(this))
                if ($(this).hasClass('fa-minus')) $(this).removeClass('fa-minus').addClass('fa-plus');
        })
        if ($(this).find('.fa').hasClass('fa-plus')) {
            $(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }



        if ($('#accordion .fa-minus').length > 0) {
            $('#accordion').css({ overflowY: 'scroll' })
        } else {
            $('#accordion').css({ overflowY: 'hidden' })
        }
    })

    $('#accordion__user .nav-link').click(function() {
        // if($('#accordion').length)
        let thisClick = $('#accordion__user .fa').index($(this).find('.fa'));

        $('#accordion__user .fa').each(function() {
            // console.log($('#accordion .fa').index(this));
            if (thisClick != $('#accordion__user .fa').index(this))
                if ($(this).hasClass('fa-minus')) $(this).removeClass('fa-minus').addClass('fa-plus');
        })
        if ($(this).find('.fa').hasClass('fa-plus')) {
            $(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }



        if ($('#accordion__user .fa-minus').length > 0) {
            $('#accordion__user').css({ overflowY: 'scroll' })
        } else {
            $('#accordion__user').css({ overflowY: 'hidden' })
        }
    })

    $('#accordion__categories .nav-link').click(function() {
        if ($(this).find('.fa').hasClass('fa-plus')) {
            $(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $(".carousel-control-next").click(function() {
        $('.countdown-slide').hide(10).show(10)
    });

    $(".carousel-control-prev").click(function() {
        $('.countdown-slide').hide(10).show(10)
    });

    $('.carousel-indicators li').click(function() {
        $('.countdown-slide').hide(10).show(10)
    })

    $('.banner__item').hover(function() {
        $(this).find('.bg__hover__bottom').addClass('')
    });

    // quantities

    $('.btn__quantiti_up').click(function() {
        let quantiti = $('.quantities__modal span').eq(0);
        let val = quantiti.text();
        val = parseInt(val) + 1;
        quantiti.text(val);
    });

    $('.btn__quantiti_down').click(function() {
        let quantiti = $('.quantities__modal span').eq(0);
        let val = quantiti.text();
        val = parseInt(val) - 1;
        if (val == 0) val = 1;
        quantiti.text(val);
    })


    // list page

    $('#accordion__categories__current .nav-link').click(function() {
        // if($('#accordion').length)
        let thisClick = $('#accordion__categories__current .fa').index($(this).find('.fa'));

        $('#accordion__categories__current .fa').each(function() {
            // console.log($('#accordion .fa').index(this));
            if (thisClick != $('#accordion__categories__current .fa').index(this))
                if ($(this).hasClass('fa-minus')) $(this).removeClass('fa-minus').addClass('fa-plus');
        })
        if ($(this).find('.fa').hasClass('fa-plus')) {
            $(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }
    })
});


//Get the button
var mybutton = document.getElementById("btn__backtop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html').animate({ scrollTop: 0 }, 1000);

}