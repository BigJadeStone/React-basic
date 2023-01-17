import { useState } from "react";

const IterationComponentQ2 = () => {

    //1 - select태그는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql']
    const options = select.map((item, index) => {
        return <option key={index}>{item}</option>
    })

    //2 - data는 state로 관리하고 화면에 li태그로 반복을 합니다.
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const [datas, setDatas] = useState(data);
    const dataList = datas.map((item) => 
        <li key={item.id}>{item.type} - {item.teacher}</li>
        
    )

    //3. 셀렉트박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.

    function handleChange(e){
        let newList = data.filter((item) => 
            item.type === e.target.value
        )
        // console.log(newList);
        setDatas(newList);
                
    };

    //4 - 숙제: 검색 기능 만들기
    
    const [search, setSearch] = useState(''); 

    const handleChange2 = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        
        // console.log(data[0].type.toLowerCase().includes(search.toLowerCase()));
        const search_result = data.filter((item)=> {
            return item.type.toLowerCase().includes(search.toLowerCase()) || 
                   item.teacher.includes(search);
        })
        // console.log(search_result);
        setDatas(search_result);
        setSearch('');

        
    }

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            <h3>검색기능 - 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링</h3>
            <div>Search: <input type="text" onChange={handleChange2} value={search}/><button type="button" onClick={handleClick}>검색</button></div>

            <select onChange={handleChange}>
                {options}
            </select>           
            <ul>
                {dataList}
            </ul> 
        </>
    )

}

export default IterationComponentQ2;