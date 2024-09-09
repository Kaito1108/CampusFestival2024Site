const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navMenu.classList.add('open');
        menuOpen = true;
        createConfetti();
    } else {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('open');
        menuOpen = false;
    }
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// メニュー項目のアニメーション遅延
const menuItems = document.querySelectorAll('.nav-menu ul li');
menuItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// スライダーの制御
const slider = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});