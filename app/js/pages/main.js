$(document).ready(function(){
    $(".header-navigation").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

function myFunction() {
    $('.menu-burger .container').toggleClass('change');
    $('.header-navigation').toggleClass('active');
}

