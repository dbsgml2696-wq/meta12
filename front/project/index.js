document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     1. 메인 홈 이미지 슬라이드 & 모달
     ========================================== */
  const imageList = [
    "../img/IMG_0384.JPG",
    "../img/IMG_1346.JPG",
    "../img/IMG_2835.JPG",
    "../img/IMG_8093.JPG",
  ];
  let mainIdx = 0;
  const mainImg = document.getElementById("currentMainImg");
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");
  const closeBtn = document.querySelector(".close");

  function updateMainImage(index) {
    if (index < 0) index = imageList.length - 1;
    if (index >= imageList.length) index = 0;
    mainIdx = index;
    if (mainImg) mainImg.src = imageList[mainIdx];
    if (expandedImg) expandedImg.src = imageList[mainIdx];
  }

  const mainPrev = document.getElementById("mainPrev");
  const mainNext = document.getElementById("mainNext");

  if (mainPrev) {
    mainPrev.onclick = (e) => {
      e.preventDefault();
      updateMainImage(mainIdx - 1);
    };
  }
  if (mainNext) {
    mainNext.onclick = (e) => {
      e.preventDefault();
      updateMainImage(mainIdx + 1);
    };
  }

  if (mainImg) {
    mainImg.onclick = () => {
      if (modal) modal.style.display = "block";
    };
  }
  if (closeBtn) {
    closeBtn.onclick = () => {
      if (modal) modal.style.display = "none";
    };
  }

  /* ==========================================
     2. MEDIA 섹션 갤러리 (슬라이드 & 썸네일 복구)
     ========================================== */
  const mediaImages = [
    "../img/IMG_2098.JPG",
    "../img/_K3A3488.JPG",
    "../img/YONG6509.JPG",
    "../img/IMG_7707.JPG",
    "../img/YONG2918.JPG",
  ];
  let mediaIdx = 0;

  const galleryMain = document.getElementById("main-img");
  const thumbContainer = document.getElementById("thumb-container");

  function updateGallery(index) {
    if (!galleryMain) return;
    if (index < 0) index = mediaImages.length - 1;
    if (index >= mediaImages.length) index = 0;
    mediaIdx = index;

    galleryMain.style.opacity = "0";
    galleryMain.src = mediaImages[mediaIdx];
    galleryMain.onload = () => {
      galleryMain.style.transition = "opacity 0.4s ease";
      galleryMain.style.opacity = "1";
    };

    document.querySelectorAll(".thumb").forEach((t, i) => {
      t.classList.toggle("active", i === mediaIdx);
    });
  }

  function initThumbs() {
    if (!thumbContainer) return;
    thumbContainer.innerHTML = "";
    mediaImages.forEach((path, i) => {
      const div = document.createElement("div");
      div.className = "thumb";
      if (i === mediaIdx) div.classList.add("active");
      div.innerHTML = `<img src="${path}" alt="thumb">`;
      div.onclick = () => updateGallery(i);
      thumbContainer.appendChild(div);
    });
  }

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  if (prevBtn) prevBtn.onclick = () => updateGallery(mediaIdx - 1);
  if (nextBtn) nextBtn.onclick = () => updateGallery(mediaIdx + 1);

  initThumbs();
  updateGallery(0);

  /* ==========================================
     3. FIREBASE 응원 섹션 (비밀번호 기능 통합)
     ========================================== */
  const firebaseConfig = {
    apiKey: "AIzaSyAR-KIv1B9PI_OOnucsscilLqpS_B_A9-k",
    authDomain: "cheer-c1227.firebaseapp.com",
    databaseURL: "https://cheer-c1227-default-rtdb.firebaseio.com",
    projectId: "cheer-c1227",
    storageBucket: "cheer-c1227.firebasestorage.app",
    messagingSenderId: "106380271477",
    appId: "1:106380271477:web:06a4bc1b685846a72dfd3c",
    measurementId: "G-4BMH7Q49NV",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();

  // [저장] 전역 함수로 등록
  window.saveMessage = function () {
    const nameInput = document.getElementById("userName");
    const msgInput = document.getElementById("userContent");
    const pwInput = document.getElementById("userPassword");

    if (
      !nameInput.value.trim() ||
      !msgInput.value.trim() ||
      !pwInput.value.trim()
    ) {
      alert("이름, 내용, 비밀번호를 모두 입력해주세요!");
      return;
    }

    database
      .ref("cheers")
      .push({
        name: nameInput.value,
        message: msgInput.value,
        password: pwInput.value,
        timestamp: Date.now(),
      })
      .then(() => {
        alert("응원이 성공적으로 등록되었습니다!");
        nameInput.value = "";
        msgInput.value = "";
        pwInput.value = "";
      })
      .catch((error) => console.error("저장 실패:", error));
  };

  // [출력] 실시간 표시
  const displayArea = document.querySelector(".display-section"); // 클래스명 확인필요
  database.ref("cheers").on("child_added", (snapshot) => {
    const data = snapshot.val();
    const key = snapshot.key;
    if (displayArea) {
      const card = document.createElement("div");
      card.id = `msg-${key}`;
      card.style.cssText = `background: white; padding: 20px; margin-bottom: 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #eee; position: relative;`;
      card.innerHTML = `
        <h4 style="margin: 0 0 8px 0; color: #333;">${data.name}</h4>
        <p style="margin: 0; color: #666; font-size: 0.95rem; white-space: pre-wrap; word-break: break-all; line-height: 1.6;">${data.message}</p>
        <button onclick="deleteMessage('${key}')" style="position: absolute; top: 15px; right: 15px; background: #ff7b00; color: white; border: none; border-radius: 4px; cursor: pointer; padding: 4px 8px; font-size: 11px;">삭제</button>
      `;
      displayArea.prepend(card);
    }
  });

  // [삭제] 전역 함수로 등록
  window.deleteMessage = function (key) {
    database
      .ref("cheers")
      .child(key)
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        const inputPw = prompt("삭제를 위해 비밀번호를 입력하세요:");
        if (inputPw === data.password) {
          database
            .ref("cheers")
            .child(key)
            .remove()
            .then(() => alert("삭제되었습니다."));
        } else if (inputPw !== null) {
          alert("비밀번호가 일치하지 않습니다.");
        }
      });
  };

  database.ref("cheers").on("child_removed", (snapshot) => {
    const target = document.getElementById(`msg-${snapshot.key}`);
    if (target) target.remove();
  });
});

/* ==========================================
   MEDIA 섹션 자동 재생 기능 추가
   ========================================== */
let autoSlideInterval;

// 자동 재생 시작 함수
function startAutoSlide() {
  // 기존에 실행 중인 타이머가 있다면 제거 (중복 실행 방지)
  stopAutoSlide();

  // 3000ms(3초)마다 다음 이미지로 이동
  autoSlideInterval = setInterval(() => {
    updateGallery(mediaIdx + 1);
  }, 3000);
}

// 자동 재생 정지 함수 (사용자가 조작할 때 호출)
function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

// 갤러리 업데이트 함수 수정 (마지막에 자동 재생 재시작 포함)
function updateGallery(index) {
  if (!galleryMain) return;
  if (index < 0) index = mediaImages.length - 1;
  if (index >= mediaImages.length) index = 0;
  mediaIdx = index;

  galleryMain.src = mediaImages[mediaIdx];

  document.querySelectorAll(".thumb").forEach((t, i) => {
    t.classList.toggle("active", i === mediaIdx);
  });

  // 사용자가 버튼을 누르면 타이머를 리셋하여 갑자기 넘어가는 현상 방지
  stopAutoSlide();
  startAutoSlide();
}

// 초기 실행 시 자동 재생 시작
startAutoSlide();

// 마우스를 이미지 위에 올리면 멈추고, 떼면 다시 재생하고 싶을 때 (선택 사항)
galleryMain.onmouseenter = stopAutoSlide;
galleryMain.onmouseleave = startAutoSlide;
