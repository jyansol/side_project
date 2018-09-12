//의미있는 숫자

let randomArr = [];
const seletedNum = 6;

const randomNum = () => {
  for (i = 0; i < seletedNum; i++) {
    randomArr[i] = Math.floor(Math.random() * 45);
  }
};

randomNum();
console.log(randomArr);

const buyLotto = (money) => {
  if( ){
    randomNum();
  }
};

//1000원일때 1개의 배열 생성

// 01 . 새로운 배열 생성
// 02. buyLottos(e)
// 03. 6개의 숫자를 가진 배열이 e만큼 생성
// 04. setLuckeyNumber(e)  : 배열로 생성
// 05. 당첨통계
// 05-1. 3개일치 - ? 개
// 05-2. 4개일치 - ? 개
// 05-3. 5개일치 - ? 개
// 05-4. 6개일치 - ? 개
// 06. 나의 수익률 계산

// 0 이랑 중복숫자 안되게
