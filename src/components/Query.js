import React from "react";
import { useDispatch } from 'react-redux';
import {deleteQuery, setVariable, setOperator, setValue, setDevice, toggleCheckBox} from '../redux/querySlice'
import { SwichHolder, Input, Remove, StyledSelect } from "../style/Style";
import CountrySelector from "./CountrySelector";
import Switch from "react-switch";

const Query = (props) => {
    const dispatch = useDispatch();
    
    const handleNumberInput = (e) => {
        const reg = /^(?=.*[0-9])$/;
        reg.test(e.target.value);
         dispatch(setValue({id: props.id, value:e.target.value}))
    };

    const operatorOptions = [
        {value : 'is', label: 'is'},
        {value : 'isn’t', label: 'isn’t'},
        {value : 'is at last', label: 'is at last'},
        {value : 'is at most', label: 'is at most'},
    ]

    const operatorOptions2 = [
        {value: 'is', label: 'is'},
        {value: 'isn’t', label: 'isn’t'},
    ];

    const variableOptions = [
        {value : 'City', label: 'City'},
        {value : 'Device', label: 'Device'},
        {value : 'Session Count', label: 'Session Count'},
        {value : 'Laptop is 13 Inch', label: 'Laptop is 13 Inch'},
    ];

    const deviceOptions = [
        {value : 'iPad Air', label: 'iPad Air'},
        {value : 'Tablet', label: 'Tablet'},
        {value : 'iPhone', label: 'iPhone'},
        {value : 'Android Phone', label: 'Android Phone'},
    ];

    return(
        <div>

        <StyledSelect
            isSearchable ={false}
            options={variableOptions} 
            placeholder="Select Variable"
            onChange={(value)=>{ dispatch(setVariable({id: props.id, variable: value.value}))}}
        />   
        {props.variable !== "Laptop is 13 Inch" &&
            <StyledSelect
                isSearchable ={false}
                options={props.variable === "Session Count" ? operatorOptions : operatorOptions2 } 
                placeholder="Select Operator"
                onChange={(value)=>{ dispatch(setOperator({id: props.id, operator: value.value}))}}
            />   
        }

        {props.variable !== "Laptop is 13 Inch" &&
        props.variable === "Session Count"? 
            <Input type="text" placeholder="Enter Number" onChange={handleNumberInput} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}></Input> 
        :props.variable === "City"? 
            <CountrySelector id={props.id}/>
        :props.variable === "Device"? 
        <StyledSelect
            isSearchable ={false}
            options={deviceOptions} 
            placeholder="Select Device"
            onChange={(value)=>{ dispatch(setDevice({id: props.id, device: value.value}))}}
        />          
        :null }

        {props.variable === "Laptop is 13 Inch" &&
        <SwichHolder >
            <Switch uncheckedIcon={false} checkedIcon={false} onColor={'#468ff0'} checked={props.check} onChange={() => { dispatch(toggleCheckBox({id: props.id, check: !props.check}))}} />
        </SwichHolder>
        }
        <Remove onClick={()=>{ dispatch(deleteQuery({id: props.id}))}}>
               remove
        </Remove>

        </div>   
    )
}

export default Query;