package exam05;

import java.util.Arrays;

public class Ex03 {
	public static void main(String[] args) {
		
		boolean[] array1= new boolean[3]; // {false, false, false}
		System.out.println("0."+ array1[0]);
		System.out.println("1."+ array1[1]);
		System.out.println("2."+ array1[2]);

		for (int i=0; i<array1.length; i++) {
			System.out.println(i + "." + array1[i]);
		}
		
		int[] array2 = new int [3]; // {0, 0, 0}
		
		for (int i=0; i<array2.length; i++) {
			System.out.println(i+"." + array2[i]);
		}
		
		//배열안에 뭐뭐 들어있나 확인하는용
		System.out.println("==>" + Arrays.toString(array2));
		
		
		
}
}