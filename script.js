document.addEventListener("DOMContentLoaded", function() {
    const swiper2 = new Swiper('#swiper2', {
        // Optional parameters
        direction: 'horizontal',
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        loop: false,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 768px
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 480px
            510: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    
    const swiper3 = new Swiper('#swiper3', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
    
        // Pagination
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper2-next',
            prevEl: '.swiper2-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const buttons = document.querySelectorAll(".wizard-buttons button");
    const steps = document.querySelectorAll(".step");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Hide all steps
            steps.forEach(step => {
                step.classList.remove("active");
            });

            // Show the corresponding step
            steps[index].classList.add("active");
        });
    });
});






