let currentSlide = 0;

function moveSlide(direction) {
    const profileContainer = document.querySelector('.profile-container');
    const profiles = document.querySelectorAll('.profile');
    const totalSlides = profiles.length;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3; // 모바일에서는 1개, 데스크탑에서는 3개 슬라이드 표시
    const maxSlide = totalSlides - slidesToShow;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const slideWidth = profiles[0].clientWidth + 20; // 각 슬라이드의 너비 + 마진
    profileContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // 버튼 비활성화 처리
    document.querySelector('.profile-nav.prev').style.display = currentSlide === 0 ? 'none' : 'flex';
    document.querySelector('.profile-nav.next').style.display = currentSlide === maxSlide ? 'none' : 'flex';
}

// 초기 상태에서 이전 버튼을 숨김
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.profile-nav.prev');
    const nextButton = document.querySelector('.profile-nav.next');
    
    if (prevButton) prevButton.style.display = 'none';
    if (nextButton) nextButton.style.display = 'flex';

    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // 자금 종류 선택 버튼 이벤트 처리
    const buttons = document.querySelectorAll('.funds-type-btn');
    const tables = document.querySelectorAll('.funds-type-table');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tables.forEach(table => table.classList.remove('active'));
            const targetTable = document.getElementById(button.dataset.target);
            if (targetTable) {
                targetTable.classList.add('active');
            }
        });
    });

    // 초기 슬라이드 위치 조정
    moveSlide(0);
});
