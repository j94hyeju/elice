 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    let result = '';
    for(let i=1; i<=input; i++){
      if(i>1) result += '\n'; // 2번째 줄부터 개행을 하고 시작
      for(let j=1; j<=i; j++){
        if(j>5){
          break; // j가 5이상이 되면, 안쪽 for문은 끝난다. (5개까지만 * 생성)
        }
        result += '*';
      }
    }
  
    // 출력할 결과를 문자열로 return 하세요.
    return result;
  }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  