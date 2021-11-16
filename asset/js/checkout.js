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


$('#checkbox__shipdiff').change(function() {
    var content = document.getElementsByClassName('collapse__ship__different')[0];

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

});