package exam04;

public class Ex13 {

	public static void main(String[] args) {
		//int num = 0, sum = 0;
		int num = 0;
		int sum = 0;
	
		while (sum < 100) {
			num++; //num = num + 1;
			sum += num; //sum = sum + num;
			
		}
		System.out.println((num-1) + "까지의 값 : " +sum);
	
	
	
	}

}
/*
 sum  num
 -----------
 0    0
 0	  1
 1	  2
 3	  3 
 6	  4
 10	  5
 
 */
 