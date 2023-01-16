import { useState } from "react";
import App from "../App3"

const StateComponent = () => {

    /*
    state란 컴포넌트에서 변화하는 값을 의미합니다.
    state가 변경되면 컴포넌트 리렌더링 시킵니다.
    함수형컴포넌트에서는 useState()를 사용합니다
    */
    
    //1st
    // let data = useState('초기값');
    // console.log(data);
    // let a = data[0];
    // let b = data[1];

    //2nd
    let [data, setData] = useState('초기값');
    // console.log(data); //state값
    // console.log(setData); //state setter함수
    let func = () => setData('변경');
    let enter = () => setData("입장");
    let exit = () => setData("퇴장");
    // setData('변경할값') //현재 에러가 뜨는 이유는 너무 많은 리렌더링이 되기 때문.
    // data = '1'; //이렇게 하면 절대 안됨. 리렌더링(화면을 다시 그리는 것)이 안됨.
 

    //state는 여러개 일수 있습니다.
    let [color, setColor] = useState("black");

    console.log(color);

    return (
        <>
            {/* css는 객체의 형태로 들어감. */}
            <h3 style={{'color': color}}>state값 : {data}</h3>
            <button onClick ={func}>값변경하기</button>
            <button onClick = {enter}>입장</button>
            <button onClick = {exit}>퇴장</button>

            <hr/>
            <button onClick={() => setColor("red")}>붉은색</button>
            <button onClick={() => setColor("blue")}>푸른색</button>
            <button onClick={() => setColor("yellow")}>그 사이 3초 그 짧은색</button>
        </>
    )

}

export default StateComponent;