const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});

const swiperCond = new Swiper(".conditionsContainer", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});
// const swiperMarks = new Swiper(".rullerMarksContainer", {
//     // Optional parameters
//     loop: false,
//     slidesPerView: 5,
//     spaceBetween: 16,

//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//             centeredSlides: true,
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//             centeredSlides: true,
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//             centeredSlides: true,
//         },
//         1023: {
//             slidesPerView: 5,
//             spaceBetween: 16,
//         },
//     },
// });

//Slick
$(".rullerMarksContainer").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

if (window.matchMedia("(max-width: 1023px)").matches) {
    /* a viewport tem pelo menos 400 pixels de largura */
}
