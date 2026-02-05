package exam04;

public class Ex07 {

	public static void main(String[] args) {
		
		int avg = 85; 
		int result = avg / 10;
		System.out.println("result: " + result);
		
		switch (avg / 10) {
		case 10:
		case 9: 
			System.out.println("1등급");
			break;
		case 8:
			System.out.println("2등급");
			break;
		case 7:
			System.out.println("3등급");
			break;
		case 6:
			System.out.println("4등급");
			break;
			
		default:
			System.out.println("5등급");
			break; //생략가능
		}
		
		
		System.out.println("-- 프로그램 종료 --");

	}

}
