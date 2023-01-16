import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";

const App = () => {

    /*
    p.121
    이벤트 핸들링
    함수형이벤트 핸들링
    */

    return(
        <>
            <EventComponent/>
            <EventComponent2/>

            {/* 실습 */}
            <EventComponentQ/>
            <EventComponentQ2/>
        </>
    )

}

export default App;