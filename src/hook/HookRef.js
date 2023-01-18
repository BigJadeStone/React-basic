import { useRef, useState } from "react";

const HookRef = () => {
    //사용자 입력값 data, 화면에 출력값 result
    const[form, setForm] = useState({data: '', result:''})

    const handleChange = (e) => {
        setForm({...form,["data"]:e.target.value}) //state값을 객체로 관리할 때 나오는 문장
    }

    //등록
    const handleClick = () => {

        setForm({data:'', result:form.data})

        //Ref의 사용
        // console.log(inputTag);
        // console.log(inputTag.current);
        console.log(inputTag.current.value);
        inputTag.current.focus();

    }

    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성에 넣습니다.
    const inputTag = useRef(null);
    // console.log(inputTag); //특정 객체를 주고 안에 current는 속성이 있음을 확인

    return (

        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>

    )

}

export default HookRef;