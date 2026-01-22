const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const closeBtn = document.querySelector(".close");
const mainImg = document.querySelector(".main-image img");

// 페이지가 완전히 로드된 후 실행되도록 설정
document.addEventListener("DOMContentLoaded", function () {
  // 1. 이미지 리스트 (실제 폴더에 있는 이미지 파일명을 꼭 확인하고 넣어주세요!)
  const imageList = [
    "./img/KakaoTalk_20260116_172619312_04.jpg",
    "./img/KakaoTalk_20260116_172619312_05.jpg",
    "./img/KakaoTalk_20260116_172619312_02.jpg",
    "./img/KakaoTalk_20260116_172619312_03.jpg", // 이 이름의 파일이 실제로 폴더에 있어야 합니다.
  ];

  let currentIndex = 0;

  // 2. 요소 선택
  const mainImg = document.getElementById("currentMainImg");
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");
  const closeBtn = document.querySelector(".close");

  const mainPrev = document.getElementById("mainPrev");
  const mainNext = document.getElementById("mainNext");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  // 3. 이미지 업데이트 함수
  function updateImage(index) {
    // 배열 범위를 벗어나지 않게 처리
    if (index < 0) index = imageList.length - 1;
    if (index >= imageList.length) index = 0;

    currentIndex = index;

    // 이미지 경로 변경
    const newPath = imageList[currentIndex];
    mainImg.src = newPath;
    expandedImg.src = newPath;

    console.log("현재 이미지 인덱스:", currentIndex); // 작동 확인용 로그
  }

  // 4. 메인 화면 화살표 클릭
  if (mainPrev) {
    mainPrev.onclick = (e) => {
      e.preventDefault();
      updateImage(currentIndex - 1);
    };
  }
  if (mainNext) {
    mainNext.onclick = (e) => {
      e.preventDefault();
      updateImage(currentIndex + 1);
    };
  }

  // 5. 이미지 클릭 시 모달 열기
  mainImg.onclick = function () {
    modal.style.display = "block";
    expandedImg.src = this.src;
  };

  // 6. 모달 안 화살표 클릭
  if (modalPrev) {
    modalPrev.onclick = function (e) {
      e.stopPropagation(); // 모달 닫힘 방지
      updateImage(currentIndex - 1);
    };
  }
  if (modalNext) {
    modalNext.onclick = function (e) {
      e.stopPropagation(); // 모달 닫힘 방지
      updateImage(currentIndex + 1);
    };
  }

  // 7. 모달 닫기
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // 모달 바깥쪽 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
