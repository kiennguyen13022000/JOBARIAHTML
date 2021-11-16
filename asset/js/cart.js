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