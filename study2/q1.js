// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(num) {
    let plus = 0;
    let multiply = 0;
  
    for (let i = 1; i <= num; i++) {
      // 합의 제곱
      plus += i;
    }
    plus = plus ** 2;
  
    for (let i = 1; i <= num; i++) {
      // 제곱의 합
      multiply += i ** 2;
    }
  
    return plus - multiply;
  }
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  