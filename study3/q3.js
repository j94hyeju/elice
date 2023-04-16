 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(a, b) {
    let result = '';
    if(b>=15) b = 15; // b의 최대 폭을 15로 제한
  
    if(a>=b) { // 뒤집힌 피라미드라면, 오류를 반환
      result = '오류';
    } else { // 정상 피라미드라면, i만큼 반복하여 * 출력
      for(let i=a; i<=b; i++){
        result += '*'.repeat(i)+'\n';
      }
    }
    return result.trim();
  }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  