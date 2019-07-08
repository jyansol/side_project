import { createStore } from 'redux';

// action type
const WELCOME_MSG = '@action/welcomeMsg'
const BYE_MSG = '@action/byeMsg'
const INCREMENT = '@action/count'

// init state
const initState = {
  // welcomeMsg: 'HI!',
  // byeMsg: 'BYE!',
  // inAndOut: false,
  // guestName: '',
  count: 0,
}

// reducer
// 상태랑 액션을 받음
// dispatch 하면 reducer
// action.payload.guestName 값을 받아와서 넣어준다.
function reducer(state = initState, action) {
  switch (action.type) {
    case WELCOME_MSG:
      return {
        ...state,
        inAndOut: true,
        guestName: action.payload.guestName
      }
      break;
    case BYE_MSG:
      return {
        ...state,
        inAndOut: false,
        guestName: '',
      }
      break;
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
      break;
    default:
      return {
        ...state,
      }
      break;
  }
}

// create store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

// react - setState
// redux - dispatch (실행)
// payload - 현상
// store.dispatch({
//   type: BYE_MSG,
// })

// store.dispatch({
//   type: WELCOME_MSG,
//   payload: {
//     guestName: 'zansol'
//   },
// })

store.dispatch({
  type: INCREMENT,
})
store.dispatch({
  type: INCREMENT,
})
store.dispatch({
  type: INCREMENT,
})

