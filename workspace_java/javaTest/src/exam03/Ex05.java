package exam03;

public class Ex05 {
	public static void main (String[] args) {
		// 삼항연산자 : 자료형 변수 = 조건 ? 참일때 값 : 거짓일때 값;
		int k = 5;
		
		int a = (k > 3) ? 100 : 200;
		System.out.println(a);
		
		double aa = (k > 13) ? 100 : 200;
		System.out.println(aa);
		
		
		int value3 = 3;
//		System.out.println(value3 % 2 == 0 ? "짝수" : "홀수");
//		
		String result = ((value3 % 2) == 0) ? "짝수" : "홀수";
		System.out.println(result);
		
		
		
		
		
	}
}
