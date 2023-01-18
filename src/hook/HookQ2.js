import { useRef, useState } from "react";


const HookQ2 = () => {

    /*
    실습(할일목록 만들기)
    1.state는 {todo:'', list:[]}로 관리하세요
    2.할일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그립니다.
    3.등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.
    */
   
   const[todoList,setTodoList] = useState({todo:'', list:[]});
   const inputTag = useRef(null); //input태그
   
   
   //인풋데이터 핸들링
   const handleChange = (e) => {
       setTodoList({...todoList, [e.target.name]:e.target.value})
    }
    
    //추가하기
    const handleClick = () => {
        
        //여기서 concat대신에 push를 쓰면 안되는 이유는 push는 원본 값에 새로운 데이터를 넣는 것.
        //그래서 push를 쓰면 원본 값이 변경이 되는 것이기 때문에 사용하면 안됨. 
        //concat은 기존 list는 유지, 새롭게 합쳐진 리스트를 반환.
        setTodoList({...todoList,['todo']:'',['list']:todoList.list.concat(todoList.todo)}) 
        
        //inputTag에 포커싱 
        inputTag.current.focus(); 

    }

    //ul태그에 할일 목록 그리기.
    const newList = todoList.list.map((item, index)=> 
        <li style={{listStyle:"none", fontWeight:"600", fontSize:"20"}}key={index}>{index+1}. {item}</li>
    )
    
    return(
        <div>
            <h3>ref로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" onChange={handleChange} ref={inputTag} value={todoList.todo}/>
            <button type="button" onClick={handleClick}>등록하기</button>
            <ul>
                {newList}
            </ul>
        </div>
    )

}

export default HookQ2;