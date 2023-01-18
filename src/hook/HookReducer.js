
//리듀서를 사용하면 state값을 외부에서 사용할 수 있다.
//state 값을 외부에서 사용할 수 있다는 것의 장점은 재활용이 가능하다는 것.
//리듀서를 원하는 컴포넌트에 가져와서 기능을 그대로 사용할 수 있음. 

import { useEffect, useReducer } from "react";

//이렇게 리듀서를 사용하면 재활용이 가능함. 
import {myReducer} from './HookReducerComponent';


//리듀서 선언 (현재의 state, 업데이트에 필요한정보-객체임)
//action을 판단해서 state를 체인지
/*
const myReducer = (state, action) => {
    //action은 객체 ★
    console.log(state);
    console.log(action);

    if(action.type === 'increase'){
        state = {value : state.value + 1};
    } else if(action.type === 'decrease'){
        state = {value : state.value - 1};
    } else if(action.type === 'reset'){
        state = {value : 0}
    }
    return state; //return {value: state.value + 1}
}
*/

const HookReducer = () => {
    //const[현재값, 리듀서를 업데이트할수 있는 함수] = useReducer(외부에서 사용할 리듀서함수, 리듀서의 초기값)
    const [state, func] = useReducer(myReducer, {value: 0})
    /*
    useEffect(()=>{
        func({type: 'reset'}); //리듀서를 싱행시키고, MyReducer의 action으로 전달됩니다.
    },[])
    console.log(state)
    */

    const up = () => {
        func({type: "increase"});
    }

    return (
        <>
            <button onClick={up}>증가</button>
            <button onClick={()=> func({type:"decrease"})}>감소</button>
            <button onClick={()=> func({type: "reset"})}>초기화</button>
            결과{state.value}
        </>
    )

}

export default HookReducer;