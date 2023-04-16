 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    let price = 0;
  
    for(let i=0; i<=input.length-1; i++){
      switch(input[i]){ // 배열의 i번째 값이
        case '아메리카노': price += 4100; break;
        // 아메리카노라면 아메리카노 금액을 총 금액에 더하고,
        case '카페라떼': price += 4600; break;
        // 카페라떼라면 카페라떼 금액을 총 금액에 더하고,
        case '카라멜마끼아또': price += 5100; break;
        // 카라멜마끼아또라면 카라멜마끼아또 금액을 총 금액에 더한다.
      }
    }
    return price;
  }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  