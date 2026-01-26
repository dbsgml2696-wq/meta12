// 페이지 로드 시 기본으로 home 실행
window.onload = () => {
  loadPage("개인프로젝트.html");
};

function loadPage(pageUrl) {
  fetch(pageUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      const container = document.getElementById("container-view");
      container.innerHTML = data;

      // 각 페이지별 필요한 JS 함수 실행
      if (pageUrl === "개인프로젝트.html") initHome();
      if (pageUrl === "개인프로젝트3.html") initMedia();
      if (pageUrl === "개인프로젝트4.html") initCheer();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      document.getElementById("container-view").innerHTML =
        "<h2>페이지를 불러올 수 없습니다.</h2>";
    });
}

// --- 각 페이지용 스크립트 모음 ---

function initHome() {
  // 홈 이미지 슬라이더 로직 (mainPrev, mainNext 등)
}

function initMedia() {
  // 미디어 썸네일, 메인 이미지 교체 로직
}

function initCheer() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.onclick = () => {
    const name = document.getElementById("userName").value;
    const content = document.getElementById("userContent").value;
    if (!name || !content) return alert("입력해주세요!");

    const card = document.createElement("div");
    card.className = "cheer-card";
    card.innerHTML = `<h3>${name}</h3><p>${content}</p>`;
    document.getElementById("cheerList").prepend(card);

    document.getElementById("userName").value = "";
    document.getElementById("userContent").value = "";
  };
}
