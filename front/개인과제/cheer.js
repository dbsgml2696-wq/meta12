// HTML의 요소들을 가져옵니다.
const submitBtn = document.getElementById("submitBtn");
const userNameInput = document.getElementById("userName");
const userContentInput = document.getElementById("userContent");
const cheerList = document.getElementById("cheerList");

// 등록 버튼을 클릭했을 때 실행될 함수
submitBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  const content = userContentInput.value.trim();

  // 입력값이 비어있는지 확인
  if (name === "" || content === "") {
    alert("이름과 내용을 모두 입력해 주세요!");
    return;
  }

  // 1. 새로운 카드를 위한 div 생성
  const newCard = document.createElement("div");
  newCard.classList.add("cheer-card");

  // 2. 카드 내부에 들어갈 HTML 구조 작성
  newCard.innerHTML = `
    <h3>${name}</h3>
    <p>${content}</p>
  `;

  // 3. 오른쪽 출력 섹션(cheerList)의 맨 위에 추가
  cheerList.prepend(newCard);

  // 4. 입력창 초기화
  userNameInput.value = "";
  userContentInput.value = "";
});
