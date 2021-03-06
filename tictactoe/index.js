// Tic-Tac-Toe 게임은 3*3 게임판 위에서
// 먼저 "가로줄 또는 세로줄 또는 대각선"을 채우는 플레이어가 이기는 게임입니다.
// 단순화된 오목이라고 생각하시면 쉽습니다.
// Tic-Tac-Toe 게임의 승자를 판별하는 함수를 만들어주세요.

// 조건: 플레이어 1이 이겼을 경우 1, 플레이어 2가 이겼을 경우 2,
//       이도저도 아닐 경우 0을 반환

// 과제를 제출하실 때는

// 1. 먼저 **우측 상단의 Submit 버튼**을 눌러 제출해주세요.
// 2. 그 후 **이 페이지의 URL**을 복사해서 문제의 입력필드에 붙여넣어 주세요.

// 함수 이름을 그대로 사용해주셔야 숨겨진 테스트코드가 제대로 동작합니다.
// let board = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

//빙고!
//가로
function ticTacToe(arr) {
  for (let i = 0; i < 3; i++) {
    let checked = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === 1) {
        checked = 1;
      } else if (arr[i][j] === 2) {
        checked = 2;
      }
    }
  }

  //세로
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] === 1) {
        return 1;
      } else if (arr[j][i] === 2) {
        return 2;
      }
    }
  }

  //대각선 \
  {
    for (let j = 0; j < 3; j++) {
      if (arr[j][j] === 1) {
        return 1;
      } else if (arr[j][j] === 2) {
        return 2;
      }
    }
  }

  //대각선 /
  {
    for (let j = 0; j < 3; j++) {
      if (arr[j][2 - j] === 1) {
        return 1;
      } else if (arr[j][2 - j] === 2) {
        return 2;
      }
    }
  }
  return 0;
}



ticTacToe([
  [0, 2, 1],
  [0, 1, 1],
  [1, 1, 0]
]) // 1
