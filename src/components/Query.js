import React from "react";
import { useDispatch } from 'react-redux';
import {deleteQuery, setVariable, setOperator, setValue, setDevice, toggleCheckBox} from '../redux/querySlice'
import { SwichHolder, Input, Remove, StyledSelect, customStyles } from "../style/Style";
import CountrySelector from "./CountrySelector";
import Switch from "react-switch";

const Query = (props) => {
    const dispatch = useDispatch();

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
        {value : 'isMobile', label: 'isMobile'},
    ];

    const deviceOptions = [
        {value : 'iPad Air', label: 'iPad Air'},
        {value : 'Tablet', label: 'Tablet'},
        {value : 'iPhone', label: 'iPhone'},
        {value : 'Android Phone', label: 'Android Phone'},
        {value : 'Laptop 13 inch', label: 'Laptop 13 inch'},
    ];

    return(
        <div>

        <StyledSelect
            styles={customStyles}
            isSearchable ={false}
            options={variableOptions} 
            placeholder="Select Variable"
            onChange={(value)=>{ dispatch(setVariable({index:props.index, variable: value.value}))}}
        />  

        <StyledSelect
            styles={customStyles}
            isSearchable ={false}
            options={props.variable === "Session Count" ? operatorOptions : operatorOptions2 } 
            placeholder="Select Operator"
            onChange={(value)=>{ dispatch(setOperator({index:props.index, operator: value.value}))}}
        />   

        {props.variable !== "isMobile" &&
        props.variable === "Session Count"? 
            <Input type="number" placeholder="Enter Number" onChange={(e) => dispatch(setValue({index:props.index, value:e.target.value}))} ></Input> 
        :props.variable === "City"? 
            <CountrySelector index={props.index}/>
        :props.variable === "Device"? 
        <StyledSelect
            styles={customStyles}
            isSearchable ={false}
            options={deviceOptions} 
            placeholder="Select Device"
            onChange={(value)=>{ dispatch(setDevice({index:props.index, device: value.value}))}}
        />          
        :null }

        {props.variable === "isMobile" &&
        <SwichHolder >
            <Switch uncheckedIcon={false} checkedIcon={false} onColor={'#468ff0'} checked={props.check} onChange={() => { dispatch(toggleCheckBox({index:props.index, check: !props.check}))}} />
        </SwichHolder>
        }
        <Remove onClick={()=>{ dispatch(deleteQuery({index:props.index}))}}>
               remove
        </Remove>

        </div>   
    )
}

export default Query;