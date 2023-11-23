import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";

/*
  modules들을 가져와
  combineReducers를 통해 리듀서들을 묶어
  하나의 Reducer로 만들어준다.
  이를 createStore로 Store를 만들어준다.
  store를 내보내 준다.
*/

/*
여러 reducer 들을 하나의 store 에 저장 할 수 있게 해주는 함수이다.
combineReducers 의 첫번째 인자에 객체 형태로 원하는 reducer 를 작성하고, 변수에 저장한다.
해당 변수를 createStore의 인자로 사용하면 다수의 reducer 를 store로 전달 할 수 있다.
*/

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
