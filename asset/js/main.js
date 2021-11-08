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
            console.log(d);
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
        // if($('#accordion').length)
        // let thisClick = $('#accordion__categories > .fa').index($(this).find('.fa'));

        // $('#accordion__categories .fa').each(function() {
        //     // console.log($('#accordion .fa').index(this));
        //     if (thisClick != $('#accordion__categories .fa').index(this))
        //         if ($(this).hasClass('fa-minus')) $(this).removeClass('fa-minus').addClass('fa-plus');
        // })
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
})