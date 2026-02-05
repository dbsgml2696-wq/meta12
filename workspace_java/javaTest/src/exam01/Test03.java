package exam01;

public class Test03 {
	public static void main(String[] args) {
		System.out.println("안녕하세요");
		System.out.println("안녕" + "하세요"); //글자+글자 -> 결합해서 나옴
		System.out.println("오늘은 " + "춥네요"); // 문자열 + 문자열 = 문자열 결합(나열)
//		글자 -> 문자열 ("" 둘러 쌓여있으면 문자열이다.)
		
		//출력문 : System.out.println(""); , System.out.printf("");
		//서식이 없는 출력문 : System.out.print(""); , System.out.println("");
		//서식이 있는 출력문 : System.out.printf(""); , %s %d-정수 %f-실수(소숫점)
		
		// 안녕하세요. 홍길동님의 나이는 19세 입니다.
		// 안녕하세요. 이성순님의 나이는 21세 입니다.
		// 안녕하세요. 장천용님의 나이는 23세 입니다.
		
		System.out.println("안녕하세요. 홍길동님의 나이는 19세 입니다.");
		System.out.println("안녕하세요. 이성순님의 나이는 21세 입니다.");
		System.out.println("안녕하세요. 장천용님의 나이는 23세 입니다.");
		System.out.println("---------------------------------");
		
		System.out.printf("안녕하세요. %s님의 나이는 %s세 입니다.\n", "홍길동", "19");
		System.out.printf("안녕하세요. %s님의 나이는 %s세 입니다.\n", "이성순", "21");
		System.out.printf("안녕하세요. %s님의 나이는 %d세, 신장은 %f 입니다.\n", "장천용", 23, 189.5);
		
		
	}
}


//소스파일 --> 저장을 할 때(컴파일) --> 바이트 코드(.class)가 만들어진다
//인터프리터 : 통역
//컴파일 : 번역 <--- 기계어



 