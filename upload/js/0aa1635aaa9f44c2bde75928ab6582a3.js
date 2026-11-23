$require(['swiper'], function () {
    var hao_lietX = new Swiper('.hao_lietX', {
        loop: true,
        loopAdditionalSlides: 3,
        spaceBetween: 50,
        speed: 1000,
        autoplay: true,
        slidesPerView: 1,
        centerInsufficientSlides: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            sliderMove: function () {
                $(".hao_lietX").addClass('touch-start')
            },
            touchStart: function (swiper, event) {
                $(".hao_lietX").addClass('touch-start')
            },
            touchEnd: function (swiper, event) {
                $(".hao_lietX").removeClass('touch-start')
            },
            touchMoveOpposite: function (swiper, event) {
                $(".hao_lietX").removeClass('touch-start')
            },
            slideChangeTransitionStart: function () {
                $(".hao_lietX").addClass('touch-start')
            },
            slideChangeTransitionEnd: function (swiper, event) {
                $(".hao_lietX").removeClass('touch-start')
            },
        }
    })
})
if (!isFrontEnv()) {
    $(".hao_lietX").addClass("outstyle");
}