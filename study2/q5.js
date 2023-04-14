// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
function solution(str) {
  let lower = str.toLowerCase();
  let alpha_cnt = { };
  
  for(let i=0; i<lower.length; i++){ // 문자열의 길이까지 반복

    let alphabet = lower.charAt(i); // alphabet은 문자열의 i번째 글자
    let count = alpha_cnt[alphabet]; // 객체의 알파벳에 해당하는 값을 가져온다.

    if(alphabet != ' '){ // 공백은 제외
      if(count === undefined){ // 만약 i번째 알파벳에 값이 아무 것도 없다면,
        alpha_cnt[alphabet] = 1; // 객체의 i번째 알파벳에 1을 넣는다.
      } else{
        alpha_cnt[alphabet] = count + 1; // 그렇지 않다면, i번째 알파벳에 해당하는 값을 1개 늘린다.
      }
    }
  }
  return alpha_cnt;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;