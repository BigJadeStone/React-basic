import { useState } from "react";

const EventComponentQ = () => {

    const [food,setFood] = useState('메뉴를 선택하세요');

    //셀렉트 태그에서는 option태그가 기본 value가 됩니다.
    const foodSelect = (e) => {
        // console.log(e.target.value);
        setFood(e.target.value);
    }

    return (

        <>
            <hr/>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
            <select onChange={foodSelect}>
                <option>피자</option>
                <option>치킨</option>
                <option>햄버거</option>
                <option>고기</option>
            </select>
            <h3>결과 : {food}</h3>
        </>

    )

}

export default EventComponentQ;