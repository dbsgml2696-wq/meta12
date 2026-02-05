package exam05;

public class Ex11 {

	public static void main(String[] args) {
		// 2차원배열 = 표(행,열) , 0부터 시작한다. [], [][], [][][]
		int[][] score = new int[3][4];// new 연산자 - 주소
		
		System.out.println("배열의 길이 : " + score.length);
		/*int imsi = score[0][1];
		System.out.println(imsi);*/
		
		for (int i=0; i<score.length; i++) { //행
			//System.out.println(score[i][0] + "/" + score[i][1] + "/" + score[i][2] + "/" + score[i][3]);
			for (int j=0; j<score[i].length; j++) { //열
				System.out.println(i + ", " + j + " => " + score[i][j]);
			}
			
		}
		
		
		
		
	}

}
