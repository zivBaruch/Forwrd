import React from "react";
import { useDispatch } from 'react-redux';
import {deleteQuery, setVariable, setOperator, setValue, setDevice} from '../redux/querySlice'
import { Select, Input, Remove } from "../style/Style";
import CountrySelector from "./CountrySelector";
const Query = (props) => {
    const dispatch = useDispatch();

    const handleNumberInput = (e) => {
        const reg = /^(?=.*[0-9])$/;
        reg.test(e.target.value);
        { dispatch(setValue({id: props.id, value:e.target.value}))}
    };

    return(
        <div>
        <Select onChange={(e)=>{ dispatch(setVariable({id: props.id,variable: e.target.value}))}}>
            <option style={{display:'none'}} value="0">
                Select Variable
            </option>
            <option value="City">City</option>
            <option value="Device">Device</option>
            <option value="Session Count">Session Count</option>
        </Select>

        <Select onChange={(e)=>{ dispatch(setOperator({id: props.id,operator: e.target.value}))}}>
            <option style={{display:'none'}} value="0">
                Select Operator 
            </option>
            <option>is</option>
            <option>isn’t</option>
            {props.variable === "Session Count"? 
                <option>is at last</option>
            : null }
            {props.variable === "Session Count"? 
                <option>is at most</option>
            : null }
        </Select> 

        {props.variable === "Session Count"? 
            <Input type="text" placeholder="Enter Number" onChange={handleNumberInput} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}></Input> 
        :props.variable === "City"? 
            <CountrySelector id={props.id}/>
        :props.variable === "Device"? 
            <Input type="text" placeholder="Enter Device Name" onChange={(e) => { dispatch(setDevice({id: props.id, device:e.target.value}))}}></Input> 
        :null
        }

        <Remove onClick={()=>{ dispatch(deleteQuery({id: props.id}))}}>
               remove
        </Remove>

        </div>   
    )
}

export default Query;