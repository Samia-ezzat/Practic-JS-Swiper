//swiper

var swiper = new Swiper (".mySwiper", {
    loop: true,
    spaceBetween:30,
    centerdSlides: true,

    pagination: {
        el:".swiper-pagination",
        clickable: true,
        DynamicBullets: true,
    },
    breakpoints: {
        380: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        }, //اضافة الفاصلة فارقة
        900: {
            slidesPerView: 3,
        },
    },
});