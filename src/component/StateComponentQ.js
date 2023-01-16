import { useState } from "react";

const StateComponentQ = () => {

    const [count, setCount] = useState('0'); //state, set state함수 반환
    //const로 선언해준 이유는 직접 값을 변경하지 못 하게 하기위함.

    //++count로 state를 직접 수정하면 안됩니다. (리렌더링이 안됨)
    return(

        <div>
            <h3>실습</h3>
            <h3>카운트:{count}</h3>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>

    )


}

export default StateComponentQ;