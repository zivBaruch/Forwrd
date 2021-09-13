import React from "react";
import { useSelector } from "react-redux";
import { OutPut } from "../style/Style";

const QueriesOutput = () => {

    const value = useSelector((state) => state.queryValue);
    


    return(
        <OutPut>
            <br/>
                {value.map((item, index, arr) => {
                    return (<span key={item.id}> {item.variable !== '' && item.variable !== "Laptop is 13 Inch" && <span> {item.variable} </span> } 
                                 {item.operator !== '' && <span> {item.operator} </span> } 
                                 {item.value !== '' && item.variable === "Session Count" && <span> {item.value} </span> }
                                 {item.city !== '' && <span> {`${item.city} `} </span> }
                                 {item.device !== '' && <span> {item.device} </span> }
                                 {item.check !== '' && item.variable === "isMobile" && item.check === true ? <span> true </span> : item.variable === "isMobile" && item.check !== true ?  <span> false </span> : null}                                 
                                 {arr.length-1 !== index && item.variable !== "" && item.operator !== '' && <span>OR</span>}                                
                            </span>)
                })}
        </OutPut>
    )
}



export default QueriesOutput;