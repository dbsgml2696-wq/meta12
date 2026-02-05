const images = [
  "/개인과제/img/IMG_2098.JPG",
  "/개인과제/img/_K3A3488.JPG",
  "/개인과제/img/YONG6509.JPG",
  "/개인과제/img/IMG_7707.JPG",
  "/개인과제/img/YONG2918.JPG",
];

let currentIndex = 0;
let slideInterval; // 타이머를 담을 변수

const mainImg = document.getElementById("main-img");
const thumbContainer = document.getElementById("thumb-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateGallery() {
  if (images.length === 0) return;
  mainImg.src = images[currentIndex];

  const thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((thumb, idx) => {
    if (idx === currentIndex) thumb.classList.add("active");
    else thumb.classList.remove("active");
  });
}

// --- 추가: 자동 슬라이드 시작 함수 ---
function startAutoSlide() {
  // 이미 실행 중인 타이머가 있다면 초기화 (중복 방지)
  if (slideInterval) clearInterval(slideInterval);

  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  }, 3000); // 3000ms = 3초마다 전환
}

function init() {
  images.forEach((path, index) => {
    const div = document.createElement("div");
    div.className = "thumb";
    div.innerHTML = `<img src="${path}" alt="thumb">`;

    div.onclick = () => {
      currentIndex = index;
      updateGallery();
      startAutoSlide(); // 썸네일 클릭 시 타이머 재시작
    };

    thumbContainer.appendChild(div);
  });

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
    startAutoSlide(); // 버튼 클릭 시 타이머 재시작
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
    startAutoSlide(); // 버튼 클릭 시 타이머 재시작
  };

  updateGallery();
  startAutoSlide(); // 초기 실행 시 자동 슬라이드 시작
}

init();
// 메인 이미지에 마우스 올리면 정지, 떼면 다시 시작
mainImg.onmouseenter = () => clearInterval(slideInterval);
mainImg.onmouseleave = () => startAutoSlide();

// media.js 파일 맨 아래에 붙여넣으세요

const imageUpload = document.getElementById("image-upload");

imageUpload.addEventListener("change", (e) => {
  const files = e.target.files;

  if (files) {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newImagePath = event.target.result;

        // 1. 이미지 배열에 추가
        images.push(newImagePath);

        // 2. 썸네일 요소 새로 생성 및 이벤트 연결
        const index = images.length - 1;
        const div = document.createElement("div");
        div.className = "thumb";
        div.innerHTML = `<img src="${newImagePath}" alt="thumb">`;

        div.onclick = () => {
          currentIndex = index;
          updateGallery();
          if (typeof startAutoSlide === "function") startAutoSlide(); // 자동 슬라이드 사용 시
        };

        // 3. 썸네일 컨테이너에 추가
        thumbContainer.appendChild(div);

        // 4. 추가된 이미지로 즉시 이동 (선택 사항)
        currentIndex = index;
        updateGallery();
      };

      reader.readAsDataURL(file); // 파일을 데이터 URL로 변환
    });
  }
});
