 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];
    let result = [];
    
    for(let i in input){
      for(let j in num_tuple){
        if(input.charAt(i) == num_tuple[j]){ // input의 i번째 문자와 num_tuple의 j번째 문자 비교
          result.push(input.charAt(i)); // 같은 값이 있다면 result에 담는다.
          if(result.length===5) break; // result가 5개가 된다면 반복문을 나간다.
        }
      }
      if(result.length===5) break;
    }
    
    return result;
  }
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  