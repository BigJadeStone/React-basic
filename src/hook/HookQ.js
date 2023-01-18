import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    const idTag = useRef(null)
    const pwTag = useRef(null)

    // 1.컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.

    useEffect(()=>{
        idTag.current.focus(); //처음 마운트 이후 id태그에 포커싱
    },[])
    
    // 2.id, pw는 state로 관리합니다
    // 로그인버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
    // 로그인버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.

    const[login, setLogin] = useState({id:'',pw:''});

   const handleChange = (e) => {
        // console.log(e.target);

        setLogin({...login, [e.target.name]:e.target.value}) //tag의 name 속성 이용.

        // if(e.target.type === 'text'){
        //     setLogin({...login, ["id"] : e.target.value})
        // }
        // if(e.target.type === 'password'){
        //     setLogin({...login, ["pw"]: e.target.value})
        // }
   }

    const handleClick = () => {

        if(idTag.current.value === ''){
            idTag.current.focus(); //id태그
        } else if(pwTag.current.value === ''){
            pwTag.current.focus(); //pw태그
        } else {
            alert(idTag.current.value  + ',' + pwTag.current.value);
        }

        //state로 처리한것.
        // if(login.id === ''){
        //     idTag.current.focus();
        // } else if(login.pw === ''){
        //     pwTag.current.focus();
        // } else {
        //     // console.log(login.pw);
        //     alert(login.id + ',' + login.pw);
        //     // alert(login.id , login.pw); 
        //     //alert는 매개변수가 하나여서 ,로 여러개 표현하는게 안됨. console.log는 매개변수가 가변매개변수여서 ,로 여러개 표현 가능한것.
        // }
    }

    return (
        <div>
            <input type="text" name="id" placeholder="아이디" ref={idTag} onChange={handleChange}/>
            <input type="password" name="pw" placeholder="비밀번호" ref={pwTag} onChange={handleChange}/>
            <button onClick={handleClick}>로그인</button>
        </div>
    )

}

export default HookQ;