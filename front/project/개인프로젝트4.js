document.addEventListener("DOMContentLoaded", () => {
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
