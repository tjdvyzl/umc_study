import { createSlice } from "@reduxjs/toolkit";
import cookie from "react-cookies";

/* Reducer */

/*
slice란?
Redux Toolkit을 사용하면 
리듀서, 액션타입, 액션 생성함수, 초기상태를 하나의 함수로 편하게 선언 할 수 있다. 
이 라이브러리에선 이 4가지를 통틀어서 slice 라고 부른다.
*/

/*
createSlice란?
선언한 slice의 name에 따라 액션 생성자,타입,리듀서를 자동으로 생성해준다. 
생성된 액션 타입을 가진 액션이 디스패치되면 리듀서가 실행된다. 
즉 리듀서가 액션의 타입에 따라 변화를 일으키는 함수다.
*/

/*
풀어서 설명하면 name은 리듀서 이름을 뭘로 할지 정하는거고, 
initialState는 이제 상태가 변하면 어떻게 실행될지 정하는 용도, 
reducer에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분이다. 
로그인 버튼 클릭시 아이디,비밀번호를 변하게 하고 싶으니 로그인 함수를 만들어 준다

또한 state는 우리가 잡아놓은 초기값의 value를 가져오는 역할을 하고 
action안에 payload랑 type은 우리가 바꾸고 싶은 데이터를 원하는 곳에다 넘겨주는 역할을 한다.
*/

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
    accesstoken: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      window.localStorage.setItem("token", state.accesstoken);
      window.localStorage.setItem("id", state.id);
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("id");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

/*
store
combineReducers 함수를 이용하여 만들어진 reducer 들을 내보낸다.

configureStore
Reducer에서 반환된 새로운 state를 Store라는 객체로 정리해 관리하는곳이다.
기존에 createStore비슷하지만 {reducer: rootReducer} 로 만들어 넣어주어야 한다.

reducer
리덕스 스토어의 rootReducer를 설정하고 
combineReducers 함수를 사용하여 slice reducer들을 병합한 rootReducer를 설정 가능하다.
단일 함수로 설정한 경우엔 스토어의 rootReducer로 사용됨.
slice reducer로 설정한 경우엔 자동으로 combineReducers에 전달하여 rootReducer를 생한다

combineReducer
여러 reducer 들을 하나의 store 에 저장 할 수 있게 해주는 함수이다.
combineReducers 의 첫번째 인자에 객체 형태로 원하는 reducer 를 작성하고, 변수에 저장한다.
해당 변수를 createStore의 인자로 사용하면 다수의 reducer 를 store로 전달 할 수 있다.
*/
