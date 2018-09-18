//의미있는 숫자

let randomArr = [];
let luckyNum = [];
const seletedNum = 6;
const lottoPrice = 1000;

const randomNum = () => {
  for (i = 0; i < seletedNum; i++) {
    randomArr[i] = Math.floor(Math.random() * 44) + 1;
  }
};

randomNum();

// n번의 randomNum배열을 출력하는 함수 (1000원에 1줄)
const buyLottos = (money) => {
  const autoNum = money / lottoPrice;
  for (j = 0; j < autoNum; j++) {
    randomNum();
    console.log(randomArr);
  }
};

buyLottos(14000);

// 중복숫자 안되게
const notOverLap = () => {
  for (j = 0; j < i; j++) {
    if (randomArr[i] === randomArr[j]) {
      i = i - 1;
      break;
    }
  }
};
notOverLap();

//오늘의 행운번호
const setLuckyNum = () => {};

setLuckyNum();

console.log('dd');
console.log(luckyNum);
// []랑 []랑 같으면
