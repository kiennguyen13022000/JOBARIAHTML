// quantities

$('.btn__quantiti_up').click(function() {
    let quantityProduct = $('#product__quantity__to__cart');
    let val = quantityProduct.text();
    val = parseInt(val) + 1;
    quantityProduct.text(val);
    localStorage.setItem('cart', val);
    $('.total__cart').text(val);
    $('#cart__item__price__total').text(formatMoney(parseInt(val) * 46.8));
    $('.subtotal').text(formatMoney(parseInt(val) * 46.8));
    $('.total').text(formatMoney(parseInt(val) * 46.8));
});

$('.btn__quantiti_down').click(function() {
    let quantityProduct = $('#product__quantity__to__cart');
    let val = quantityProduct.text();
    val = parseInt(val) - 1;
    if (val == 0) val = 1;
    quantityProduct.text(val);
    localStorage.setItem('cart', val);
    $('.total__cart').text(val);
    $('#cart__item__price__total').text(formatMoney(parseInt(val) * 46.8));
    $('.subtotal').text(formatMoney(parseInt(val) * 46.8));
    $('.total').text(formatMoney(parseInt(val) * 46.8));
});


let quantityCurrent = localStorage.getItem('cart')
quantityCurrent = quantityCurrent != null ? quantityCurrent : 0;
$('#product__quantity__to__cart').text(quantityCurrent);
$('.total__cart').text(quantityCurrent);
$('#cart__item__price__total').text(formatMoney(parseInt(quantityCurrent) * 46.8));
$('.subtotal').text(formatMoney(parseInt(quantityCurrent) * 46.8));
$('.total').text(formatMoney(parseInt(quantityCurrent) * 46.8));
if (localStorage.getItem('cart') == null) {
    $('#table__cart').hide();
}

function removeCartItem() {
    $('.total__cart').text(0);
    localStorage.removeItem('cart');
    $('#table__cart').hide();
    $('#cart__empty').show(300);

}


function formatMoney(money) {
    return (money).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}








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