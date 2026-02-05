package exam05;

public class Ex12 {

	public static void main(String[] args) {
		//int[][] score = new int[3][4];
		
		int[][] nums = {
				{10, 20, 30}, //0행
				{40, 50, 60}  //1행
		};
		
		System.out.println("배열의 길이(행의 길이) : " + nums.length);
		System.out.println("배열의 0번째 인덱스의 길이(열의 길이) : " + nums[0].length);
		System.out.println("배열의 0번째 인덱스의 길이(열의 길이) : " + nums[1].length);

		for (int i=0; i<nums.length; i++) {
			for (int j=0; j<nums[i].length; j++) {
				System.out.println("nums[" + i + "][" + j + "] : " +nums[i][j]);
			}
		}
	}

}
