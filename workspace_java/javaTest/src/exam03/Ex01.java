package exam03;

public class Ex01 {

	public static void main(String[] args) {
		
		//산술연산자
		int num1 = 5;
		int num2 = 3;

		System.out.println(num1 + num2);
		System.out.println(num1 - num2);
		System.out.println(num1 * num2);
		System.out.println(num1 / num2); //몫
		System.out.println(num1 % num2); //나머지
		System.out.println("------------");
		
		//증감연산자 ++ --
		int num3 = 2;
		num3++;  // = num3 = num3 + 1; //3
		System.out.println(num3);
		
		++num3;  // = num3 = num3 + 1; //4
		System.out.println(num3); //4
		
		System.out.println(num3++); //4   (5)  // 일단 
		System.out.println(num3);  //5
		
		System.out.println(++num3); //6
		System.out.println(num3);  //6
		
		System.out.println(num3++); //6   (7)  
		System.out.println(num3);  //7
		
		System.out.println(++num3); //8
		System.out.println(num3); //8
		
		
		num3--;  //7
		System.out.println(num3);  //7
		
		System.out.println(--num3); //6
		System.out.println(num3);//6
		
		System.out.println(num3--); //6  (5)
		System.out.println(num3);//5
		
		
		
		
		
	}

}
