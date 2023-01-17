
/*
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받음 (가장 일반적인 방법)

2.src폴더 밑에 img 파일 참조가능 (선호 x)
import img1 from '../img/img1.png';

3. public폴더 밑에 넣는 경우 이미지를 바로 참조 가능 (선생님이 추천하시는 방법)
*/

import { useState } from "react";

const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    //1. state로 arr 관리
    const [imgs, setImgs] = useState(arr);

    //3. 클릭시에 화면에 그려질 내용을 state로 관리
    const [content, setContent] = useState({ src:'/img/img1.png' });
    const handleClick = (e) => {
        setContent({ src: e.target.src });
    }

    //2. 반복처리
    const itemList = imgs.map((item, index) =>
        <div key={item.src}>
            <img src={item.src} alt={item.title} width="100" onClick={handleClick} />
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    )



    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            <div>
                <img src={content.src} alt="이미지" width="200" />
            </div>
            {/* 
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
            <img src={img1} alt="제목" width="100"/>
            <img src="/img/img1.png" alt="제목" width="100" />
             */}

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* 반복할 요소의 모형 */}
                {/* <div>
                    <img src="/img/img1.png" alt="제목" width="100" />
                    <p>제목</p>
                    <p>가격</p>
                </div> */}
                {itemList}
            </div>
        </>
    )

}

export default IterationComponentQ;