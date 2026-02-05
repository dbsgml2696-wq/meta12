package exam04;

public class Ex18 {

	public static void main(String[] args) {
		
		for(int i=0; i<10; i++) {
			if (i == 2) {
				//break; //완전히 빠져나가
				continue; //밑에있는거 하지말고 반복문 처음으로가ㅏ
			}
			System.out.println("i 값은 "+i+ "입니다.");
		}
	}

}
