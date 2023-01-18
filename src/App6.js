import { useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookQ from "./hook/HookQ";
import HookQ2 from "./hook/HookQ2";
import HookReducer from "./hook/HookReducer";
import HookReducer2 from "./hook/HookReducer2";
import HookRef from "./hook/HookRef";

const App = () => {

    /*
    1.필수훅
    useState()
    컴포넌트에서 상태값을 제어하는 가장기본이 되는 hook

    useEffect()
    컴포넌트의 라이프사이클(생명주기)를 다룹니다.
    mount, mount이후, state변경될 때, unmount이전에 특정작업을 수행할 수 있습니다.

    useRef()
    태그의 이름달기

    2. 부가적인 훅
    useReducer()
    useState의 사용을 외부에서 사용할 수 있게 해주는 훅 (state의 변경을 외부에서 제어할 수 있습니다.)

    const [현재값,리듀서를 업데이트할수있는 함수] = useReducer(외부에서 사용할 리듀서함수, 리듀서의 초기값)
    */
    const[visible, setvisible] = useState(true); 

    const handleClick = () => {
        // console.log(visible);
        setvisible(!visible); //visible이 가진 값의 반대
    }

    return(

        <>
            {/* effect훅 */}
            <button onClick={handleClick}>{visible ? "숨기기" : "보이기"}</button>
            <br/>
            {visible ? <HookEffect/> : null}

            <hr/>
            {/* ref훅 */}
            <HookRef/>

            <hr/>
            {/* 실습 */}
            <HookQ/>

            <hr/>
            <HookQ2/>

            {/* 리듀서 훅 */}
            <hr/>
            <div>-아래는 리듀서 파트-</div>
            <hr/>
            <HookReducer/>

            <hr/>
            <HookReducer2/>
        </>

    )

}

export default App;