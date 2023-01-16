import { useState } from "react";

const EventComponentQ2 = () => {

    const [data, setData] = useState({input:'',result:''});

    const handleChange = (e) => {
        // const copy = {...data , [e.target.name]:e.target.value}
        // setData(copy);

        setData({input: e.target.value , result: data.result});

        //setState함수 특성상 내부적으로 비동기 방식으로 작동 
        // console.log(data); //이전값이 출력됩니다(정상) 
    }

    const handleClick = (e) => {
        // const copy = {...data, [e.target.name]: data.input, ["input"]:''}
        // setData(copy);
        setData({input: '', result: data.input})
    }

    return (    

        <>  
            <hr/>
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>
                클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리<br/>
                힌트는? 아마도 state는 두개가 필요할듯?
            </p>
            <input type="text" name="input" onChange={handleChange} value={data.input}/>
            <button type="button" name="result" onClick={handleClick}>추가하기</button>
            <h3>결과</h3>
            <p>{data.result}</p>
        </>

    )

}

export default EventComponentQ2;


//선생님이 작성하신 풀이
// const EventComponentQ2 = () => {
//     //실습
//     /*
//     const [data, setData] = useState(''); //인풋데이터
//     const [result, setResult] = useState(''); //결과데이터

//     const handleChange = (e) => {
//         setData(e.target.value); //내부적으로 비동기 적으로 변경
//         //console.log(data); //이전 값이 출력됩니다(정상)
//     }

//     const handleClick = (e) => {
//         setResult(data); //사용자가 입력한 값으로 변경.
//         setData(''); //인풋데이터는 공백으로 변경.
//     }
//     */

//     //state를 객체로 관리
//     const [form, setForm] = useState({data : '', result: ''}); //인풋데이터
//     const handleChange = (e) => {
//         //data는 사용자의 입력값으로, result는 유지
//         setForm({data: e.target.value, result : form.result}); 
//     }

//     const handleClick = () => {
//         //data는 '', result는 data로 변경
//         setForm({data: '', result: form.data});
//     }


//     return (
//         <div>
//             <hr/>
//             <h3>인풋데이터 핸들링(실습)</h3>
//             <pre>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</pre>            
// 			<pre>힌트는? 아마도 state는 두개가 필요할듯?</pre> 

//             <input type="text" onChange={handleChange} value={form.data} />
//             <button type="button" onClick={handleClick}>추가하기</button>
//             <h3>결과</h3>
//             <p>{form.result}</p>

//         </div>
//     )
// }

// export default EventComponentQ2;
