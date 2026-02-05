package exam04;

import java.util.Scanner;

public class Ex06_1 {

	public static void main(String[] args) {
		// 입력 : 이름, 영어, 국어, 수학
		// 출력 : 이름 국어 영어 수학 총점 평균 등급
		/*
		    등급조건 (평균기준)
		    - 1등급 : 90점이상 : avg >= 90
		    - 2등급 : 80점이상 : avg >= 80
		    - 3등급 : 70점이상 : avg >= 70
		    - 4등급 : 60점이상 : avg >= 60
		    - 5등급 : 60점미만
		 */

		
		//입력
		Scanner sc = new Scanner(System.in);
		
		System.out.print("이름을 입력하세요 : ");
		String name = sc.nextLine();
		
		System.out.print("국어점수를 입력하세요 : ");
		String kor_ = sc.nextLine();
		
		System.out.print("영어점수를 입력하세요 : ");
		String eng_ = sc.nextLine();
		
		System.out.print("수학점수를 입력하세요 : ");
		String mat_ = sc.nextLine();
		
		sc.close();
		
		//처리
		
		int kor = Integer.parseInt(kor_); 
		int eng = Integer.parseInt(eng_);
		int mat = Integer.parseInt(mat_);
		
		int tot = 0; 
		tot += kor;  
		tot += eng;  
		tot += mat;  
		double avg = tot / 3.0; 
		
		String grade;  // else가 없으면 반드시 초기값을 두는게 낫다
		
		
		if (avg >= 90) {
			grade = "1";
		} else if (avg >= 80) {
			grade = "2";
		} else if (avg >= 70) {
			grade = "3";
		} else if (avg >= 60) {
			grade = "4";
		} else {
			grade = "5";
		}
		
		System.out.println(grade + "등급입니다.");
		
		
		
		
		
		
		
		
		
	}

}
