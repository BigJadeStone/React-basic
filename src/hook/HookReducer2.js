import { useReducer } from "react";

import { nameReducer } from "./HookReducerComponent";

//리듀서
/*
const nameReducer = (state, action) => {

    // console.log(action); //e.target
    
    // if(action.name == 'name'){
    //     state = {...state, ['name']: action.value};
    // } else if(action.name == 'age'){
    //     state = {...state, ['age']: action.value};
    // }
     
    state = {...state, [action.name]: action.value};

    return state;
}
*/

const HookReducer2 = () => {
    //[스테이트, 리듀서 제어함수] = useReducer(리듀서, 초기값)
    const[state, func] = useReducer(nameReducer, {name: '', age: ''});

    const {name, age} = state; //스테이트 값 구조분해할당

    return (
        <>
            이름:<input type="text" name="name" onChange={(e) => func(e.target)}/>  
            나이:<input type="text" name="age" onChange={(e) => func(e.target)}/>        
            <br/>
            결과값:{name}<br/>
            결과값:{age}<br/>
        </>
    )

}

export default HookReducer2;