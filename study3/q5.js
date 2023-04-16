 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(string) {
    let obj = { // key - 여는 괄호, value - 닫는 괄호
      '(': ')',
      '[': ']',
      '{': '}'
    }
    let bracket = '';
  
    let arr = ['(',')','[',']','{','}'];
    for(i in string){
      for(j in arr){
        if(string.charAt(i) === arr[j]) // 전달 받은 string과 arr를 비교하여,
          bracket += string.charAt(i); // 두 값이 같으면(괄호라면) bracket에 넣는다.
      }
    }
    
    arr = []; // pop, push를 통해 결과값을 나타낼 배열
    for(var k = 0; k<bracket.length;  k++){
      if(bracket.charAt(k) !== obj[arr[arr.length-1]]) arr.push(bracket.charAt(k));
      // braket의 k번째 문자와 arr의 마지막 요소의 키값(닫는 괄호)이 같지 않다면, 문자를 arr에 넣는다.
      else arr.pop();
      // 같다면(괄호의 짝이 맞으면), arr의 마지막 요소를 삭제한다.
    }
    return arr.length === 0 ? '정상' : '비정상';
  }
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
