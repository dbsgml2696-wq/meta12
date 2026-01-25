
// 1. 사용할 이미지 리스트 (본인의 이미지 파일명으로 교체하세요)
const images = [
    "/project/img/IMG_2098.JPG",
    "/project/img/_K3A3488.JPG", 
    "/project/img/YONG6509.JPG", 
    "/project/img/IMG_7707.JPG", 
    "/project/img/YONG2918.JPG"


];

let currentIndex = 0;

// 요소 선택
const mainImg = document.getElementById('main-img');
const thumbContainer = document.getElementById('thumb-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 2. 화면 업데이트 함수
function updateGallery() {
    if (images.length === 0) return;
    
    // 메인 이미지 교체
    mainImg.src = images[currentIndex];

    // 썸네일 활성화 표시
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, idx) => {
        if (idx === currentIndex) thumb.classList.add('active');
        else thumb.classList.remove('active');
    });
}

// 3. 초기화 함수
function init() {
    // 썸네일 4개 생성
    images.forEach((path, index) => {
        const div = document.createElement('div');
        div.className = 'thumb';
        div.innerHTML = `<img src="${path}" alt="thumb">`;
        
        div.onclick = () => {
            currentIndex = index;
            updateGallery();
        };
        
        thumbContainer.appendChild(div);
    });

    // 화살표 이벤트
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    };

    updateGallery();
}

// 스크립트 실행
init();