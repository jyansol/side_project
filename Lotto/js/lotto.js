//의미있는 숫자

let randomArr = [];
const seletedNum = 6;
const lottoPrice = 1000;

const randomNum = () => {
  for (i = 0; i < seletedNum; i++) {
    randomArr[i] = Math.floor(Math.random() * 45);
  }
};

randomNum();
console.log(randomArr);

const buyLotto = (lottoPrice, buyLotto) => {
  const autoNum = buyLotto / lottoPrice;
  for (i = 0; i < autoNum; i++) {
    console.log(randomArr);
  }
};

buyLotto(lottoPrice, 14000);

//1000원일때 1개의 배열 생성
// 0 이랑 중복숫자 안되게
