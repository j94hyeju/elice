 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용 
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
      
    // 최소비용을 return 하세요.
    let hat = H * A; // 이용 시간 * 가격
    let coder = 0;
    if(H - C >= 0){ // 이용할 시간이 기본 시간보다 많다면,
      coder = B + (H-C) * D; // 기본요금 + (이용시간-기본시간) * 시간당 부과 요금
    } else {
      coder = B; // 아니라면, 기본 요금 부과
    }
  
    if(hat>coder){ // 모자장수 렌터카가 코더랜드 렌터카 요금보다 크다면
      return coder; // 코더랜드가 더 저렴
    } else {
      return hat; // 아니라면, 모자장수가 더 저렴
    }
  }
  
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;