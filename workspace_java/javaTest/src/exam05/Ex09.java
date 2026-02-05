package exam05;

public class Ex09 {

	public static void main(String[] args) {
		int[] array1 = new int[] {3, 4, 5}; // {3, 4, 5} <-- 300
		int[] array2 = array1; //300
		array2[0] = 7;
		
		System.out.println(array1[0]);
		System.out.println(array2[0]);
		
		System.out.println("=========================");

		
		
		int[] array3 = {90, 80, 70, 60, 50};
		for (int i=0; i<array3.length; i++) {
			System.out.println(array3[i]);
		}
		
		System.out.println("=========================");
		
		for (int k : array3) {
			System.out.println(k);
		}
		
		
	}

}

