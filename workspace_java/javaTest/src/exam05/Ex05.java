package exam05;

import java.util.Arrays;
import java.util.Scanner;

public class Ex05 {

	public static void main(String[] args) {
		// 입력 : 30명의 친구 이름
		// 출력 : 30명의 친구 이름
		Scanner sc = new Scanner(System.in);
		
		String[] names = new String[30]; //작은가방 

		for (int i=0; i<30; i++) {
			System.out.print("이름을 입력하세요 : ");
			String name = sc.nextLine();
			
			names[i] = name;
			
		}
		sc.close();
		
		System.out.println(names);  // 주소
		System.out.println(names.length);  //배열의 크기(길이)
		System.out.println(Arrays.toString(names)); //배열안에 있는걸 한눈에 볼떄 사용
		
		
		for (int i=0; i<30; i++) {
			System.out.println(names[i]);
		}
	
	}

}
