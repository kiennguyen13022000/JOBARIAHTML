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
})