import { SET_IS_CLICKED  } from '../actions/index';
import { combineReducers } from 'redux'

const initState = {
    isClicked: false,
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case SET_IS_CLICKED :
            // return 값을 action의 값으로 반환하는지 꼭 확인해야..
            return {...state, isClicked: action.isClicked}
            break;

        // default 값이 없으면 실행 x 다음 에러가 뜬다
        /* 
        The slice reducer for key "reducer" 
        returned undefined during initialization
        */
        default:
            return state;
    }
}


// combineReducers의 return 형식으로 reducer를 변환 해야만 사용 가능
const rootReducer = combineReducers({
    reducer
 })


export default rootReducer;