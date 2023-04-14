// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
function solution(str) {
    let result = '';
    for(let i=0; i<str.length; i++){
      if(i===str.length/2){ // 문자열의 반을 검사했으면, 반복문을 나가서 끝낸다.
        break;
      }
      if(str.charAt(i)===str.charAt(str.length-1-i)){ // 문자열의 i번째 글자와 뒤(length-1)에서 -i번째 글자가 같다면
        result += 'Same\n'; // 'Same'을 result에 넣는다.
      } else{
        result += 'Different\n'; // 아니라면, 'Different'를 result에 넣는다.
      }
    }
    
    return result.trim(); // 개행문자 삭제
  }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
    