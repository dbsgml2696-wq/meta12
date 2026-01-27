document.addEventListener("DOMContentLoaded", () => {
  /* 1. 메인 홈 이미지 슬라이드 & 모달 (개인프로젝트.js 관련) */
  const imageList = [
    "./img/IMG_0384.JPG",
    "./img/IMG_1346.JPG",
    "./img/IMG_2835.JPG",
    "./img/IMG_8093.JPG",
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
    mainImg.src = imageList[mainIdx];
    expandedImg.src = imageList[mainIdx];
  }

  document.getElementById("mainPrev").onclick = (e) => {
    e.preventDefault();
    updateMainImage(mainIdx - 1);
  };
  document.getElementById("mainNext").onclick = (e) => {
    e.preventDefault();
    updateMainImage(mainIdx + 1);
  };

  mainImg.onclick = () => {
    modal.style.display = "block";
  };
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };

  document.getElementById("modalPrev").onclick = (e) => {
    e.stopPropagation();
    updateMainImage(mainIdx - 1);
  };
  document.getElementById("modalNext").onclick = (e) => {
    e.stopPropagation();
    updateMainImage(mainIdx + 1);
  };

  /* 2. MEDIA 섹션 갤러리 (개인프로젝트3.js 관련) */
  const mediaImages = [
    "/project/img/IMG_2098.JPG",
    "/project/img/_K3A3488.JPG",
    "/project/img/YONG6509.JPG",
    "/project/img/IMG_7707.JPG",
    "/project/img/YONG2918.JPG",
  ];
  let mediaIdx = 0;
  const galleryMain = document.getElementById("main-img");
  const thumbContainer = document.getElementById("thumb-container");

  function updateGallery() {
    galleryMain.src = mediaImages[mediaIdx];
    document.querySelectorAll(".thumb").forEach((t, i) => {
      t.classList.toggle("active", i === mediaIdx);
    });
  }

  mediaImages.forEach((path, i) => {
    const div = document.createElement("div");
    div.className = "thumb";
    div.innerHTML = `<img src="${path}">`;
    div.onclick = () => {
      mediaIdx = i;
      updateGallery();
    };
    thumbContainer.appendChild(div);
  });

  document.getElementById("prev-btn").onclick = () => {
    mediaIdx = (mediaIdx - 1 + mediaImages.length) % mediaImages.length;
    updateGallery();
  };
  document.getElementById("next-btn").onclick = () => {
    mediaIdx = (mediaIdx + 1) % mediaImages.length;
    updateGallery();
  };
  updateGallery();

  /* 3. CHEER 섹션 게시판 (개인프로젝트4.js 관련) */
  const submitBtn = document.getElementById("submitBtn");
  const cheerList = document.getElementById("cheerList");
  const nameInput = document.getElementById("userName");
  const contentInput = document.getElementById("userContent");

  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();

    if (!name || !content) {
      alert("이름과 내용을 입력해 주세요.");
      return;
    }

    const card = document.createElement("div");
    card.className = "cheer-card";
    card.innerHTML = `<h3>${name}</h3><p>${content}</p>`;
    cheerList.prepend(card);

    nameInput.value = "";
    contentInput.value = "";
  });
});
