$(function(){
    var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $(".header__top").css({"background": "black"})
    }
    if(50 > scrolled){
        $(".header__top").css({"background": "transparent"})         
    }

}
    
    $(".menu, .footer").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top-130}, 1500);
            });
        
            var mixer = mixitup('.gallery__content');


    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
    })

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

})