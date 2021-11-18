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

    if (content.style.height) {
        content.style.height = null;
    } else {
        // content.style.height = content.scrollHeight + "px";
        content.style.height = 'auto'

    }

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


var forms;

function submitInfoOrder() {
    if (!$('#checkbox__shipdiff').is(':checked')) {

        $('.btn__form__info__order').click();
    } else {
        $('.btn__submit__order__diff').click();
    }

}

window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    forms = document.getElementsByClassName('billding__details');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);


window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    forms = document.getElementsByClassName('form__info__order__diff');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);