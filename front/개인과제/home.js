document.addEventListener("DOMContentLoaded", function () {
    // 1. 이미지 리스트 (경로와 확장자 대소문자 주의!)
    const imageList = [
        "./개인과제/IMG_0384.JPG",
        "./개인과제/IMG_1346.jpg",
        "./개인과제/IMG_2835.jpg",
        "./개인과제/IMG_8093.jpg"
    ];
    let currentIndex = 0;

    // 2. 요소 가져오기
    const mainImg = document.getElementById("currentMainImg");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".modal-close");

    // 화살표들 (메인용 & 모달용)
    const mainPrev = document.getElementById("mainPrev");
    const mainNext = document.getElementById("mainNext");
    const modalPrev = document.querySelector(".modal-prev");
    const modalNext = document.querySelector(".modal-next");

    // 3. 이미지 업데이트 함수 (공통 사용)
    function updateImage(index) {
        if (index < 0) index = imageList.length - 1;
        if (index >= imageList.length) index = 0;

        currentIndex = index;
        const newPath = imageList[currentIndex];

        // 메인 이미지와 모달 이미지를 동시에 변경
        if (mainImg) mainImg.src = newPath;
        if (modalImg) modalImg.src = newPath;
    }

    // 4. 클릭 이벤트 연결 (메인 화면 화살표)
    if (mainPrev) mainPrev.onclick = () => updateImage(currentIndex - 1);
    if (mainNext) mainNext.onclick = () => updateImage(currentIndex + 1);

    // 5. 클릭 이벤트 연결 (모달 내부 화살표 - 이 부분이 중요!)
    if (modalPrev) modalPrev.onclick = (e) => {
        e.stopPropagation(); // 모달이 닫히지 않게 방지
        updateImage(currentIndex - 1);
    };
    if (modalNext) modalNext.onclick = (e) => {
        e.stopPropagation(); // 모달이 닫히지 않게 방지
        updateImage(currentIndex + 1);
    };

    // 6. 이미지 클릭 시 모달 열기
    if (mainImg) {
        mainImg.onclick = function () {
            modal.style.display = "flex";
            // 현재 메인 이미지의 경로를 기반으로 인덱스 찾기
            const currentSrc = this.getAttribute("src");
            currentIndex = imageList.indexOf(currentSrc);
            modalImg.src = currentSrc;
        };
    }

    // 7. 모달 닫기