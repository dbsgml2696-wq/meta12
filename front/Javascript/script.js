let heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
};

// alert("오늘은 자바스크립트 첫날");

// confirm("확인좀하자");

document.write("<h1>어서오세요</h1>");

// 유저입력창
let userName = prompt("이름을 입력하세요", " 아무개");

// 콘솔창에 보이는 역할, 콘솔창은 개발자 도구의 콘솔탭에서 확인 가능
console.log(userName + "님, 환영합니다.");
