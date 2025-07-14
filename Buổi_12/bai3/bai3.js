window.onload = function() {
    const dots = document.querySelectorAll('.slider-dots .dot');
    const images = [
        'img/slide.jpg',
        'img/slide2.jpg',
        'img/slide3.jpg',
        'img/slide4.jpg'
    ];
    const sliderBg = document.querySelector('.slider-bg');
    let current = 0;

    function showSlide(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        sliderBg.style.backgroundImage = `url('${images[index]}')`;
    }

    showSlide(current);

    setInterval(() => {
        current = (current + 1) % dots.length;
        showSlide(current);
    }, 4000);

    dots.forEach((dot, idx) => {
        dot.onclick = () => {
            current = idx;
            showSlide(current);
        };
    });
};