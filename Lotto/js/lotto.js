
const randomArr = [];
const luckyNum = [];
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
// 코드 분석
const notOverLap = () => {};
notOverLap();

//오늘의 행운번호
const setLuckyNum = () => {
  for (i = 0; i < seletedNum; i++) {
    luckyNum[i] = Math.floor(Math.random() * 44) + 1;
  }
};
setLuckyNum();

console.log('행운번호' + luckyNum + '입니다.');
console.log(luckyNum);

// []랑 []랑 같으면
// const myNum = () => {
//   if () {
//     console.log('is');
//   }
// };
// myNum();
