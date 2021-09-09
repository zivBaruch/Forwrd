import React from "react";
import { useSelector } from "react-redux";

const QueriesOutput = () => {

    const value = useSelector((state) => state.queryValue);
    
    return(
        <div>
            <br/>
                {value.map(item => {
                    return (<div key={item.id}> {item.variable !== ''? <span> {item.variable} </span> : null} 
                                 {item.operator !== ''? <span> {item.operator} </span> : null} 
                                 {item.value !== '' && item.variable === "Session Count" ? <span> {item.value} </span> : null}
                                 {item.city !== '' ? <span> {item.city} </span> :null}
                                 {item.device !== '' ? <span> {item.device} </span> :null}
                            </div>
                    )
                })}
        </div>
    )
}



export default QueriesOutput;