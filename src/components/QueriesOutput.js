import React from "react";
import { useSelector } from "react-redux";
import { OutPut } from "../style/Style";

const QueriesOutput = () => {

    const value = useSelector((state) => state.queryValue);
    
    return(
        <OutPut>
            <br/>
                {value.map(item => {
                    return (<div key={item.id}> {item.variable !== '' && item.variable != "Laptop is 13 Inch" && <span> {item.variable} </span> } 
                                 {item.operator !== '' && <span> {item.operator} </span> } 
                                 {item.value !== '' && item.variable === "Session Count" && <span> {item.value} </span> }
                                 {item.city !== '' && <span> {`${item.city} `} </span> }
                                 {item.device !== '' && <span> {item.device} </span> }
                                 {item.check !== '' && item.variable === "Laptop is 13 Inch" && item.check == true ? <span> Laptop is 13 Inch </span> : item.variable === "Laptop is 13 Inch" && item.check != true ?  <span> Laptop isn't 13 Inch </span> : null}
                            </div>
                    )
                })}
        </OutPut>
    )
}



export default QueriesOutput;