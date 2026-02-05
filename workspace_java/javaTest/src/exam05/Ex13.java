package exam05;

public class Ex13 {

	public static void main(String[] args) {
		int[][] matrix = {
				{1, 2, 3},
				{4, 5, 6}
		};
		
		for (int i = 0; i < matrix.length; i++) {  // 행 반복
			for (int j= 0; j < matrix[i].length; j++) {  // 열 반복
				System.out.println(matrix[i][j] + " ");
			}
			System.out.println(); //행이 끝나면 줄바꿈
		}

	}

}
