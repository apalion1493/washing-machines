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



let container = document.getElementById('reviews-list');

container.onclick = function(event) {
    let buttonAudio = event.target;
    if (buttonAudio.classList.contains('review-block__audio-btn')) {
        let myaudioId = jQuery(event.target).find("audio").attr('id');
        let myaudio = document.getElementById(myaudioId);
        console.log(myaudioId);

        if(myaudio.paused === true) {
            document.getElementById(myaudioId).play();
            $(buttonAudio).toggleClass('stop');
        } else if (myaudio.paused === false) {
            document.getElementById(myaudioId).pause();
            $(buttonAudio).toggleClass('stop');
        }
    }
};