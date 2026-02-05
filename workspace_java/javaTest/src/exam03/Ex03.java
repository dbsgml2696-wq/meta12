package exam03;

public class Ex03 {

	public static void main(String[] args) {
		//논리연산자 : && || !
		int k1 = 5;
		int k2 = 7;
		double d1 = 3.5;
		double d2 = 5.7;
		
		System.out.println((k1 > k2) && (1 > d2));
		System.out.println(k1 >= k2 && 1 >= d2);
		
		System.out.println(k1 < k2 && 1 < d2);
		System.out.println(((k1 +3) < k2) && (d1 < d2));
		
		System.out.println(k1 == k2);
		System.out.println(k1 != k2);
		
		System.out.println(k1 >= k2 || d1 >= d2);
		
		System.out.println(!(k1 == k2));
		
		
		
		
		
	}

}
