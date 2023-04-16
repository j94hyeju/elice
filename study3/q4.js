 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    let arr = input.replace(/\n/g, ' ').split(' '); // 전달 받은 input 값을 넣은 배열
    let arrA = []; // 구간 A를 만들 배열
    let arrB = []; // 구간 B를 만들 배열
    let result = []; // 결과 값을 받을 배열
  
    function arrSet(num1, num2, arr, arrAB){
      for(let i=Number(arr[num1]); i<=Number(arr[num2]); i++)
        arrAB.push(i);
      return arrAB;
    }
    arrA = arrSet(0, 1, arr, arrA); // 구간 A (ex. 3이상 7이하 - 3,4,5,6,7)
    arrB = arrSet(2, 3, arr, arrB); // 구간 B (ex. 5이상 9이하 - 5,6,7,8,9)
  
    arr = []; // 구간 A와 구간 B의 교집합을 담기 위한 배열 초기화
    arr = arrA.filter(arrA => arrB.includes(arrA)); // 구간 A와 구간 B의 겹치는 숫자를 arr에 담는다.
  
    if(arr.length == 0) return 'X'; // 겹치는 숫자가 없다면, 'X'를 리턴
    else result.push(arr[0], arr[arr.length-1]);
    // 있다면, 교집합 배열의 최솟값과 최댓값을 result에 담는다.
    
    return result;
  }
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
