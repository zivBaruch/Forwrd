import React from "react";
import { useDispatch } from 'react-redux';
import { setElement} from '../redux/querySlice'
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
            onChange={(value)=>{ dispatch(setElement({index:props.index, val: value.value, thisElement: "variable"}))}}
        />  

        <StyledSelect
            styles={customStyles}
            isSearchable ={false}
            options={props.variable === "Session Count" ? operatorOptions : operatorOptions2 } 
            placeholder="Select Operator"
            onChange={(value)=>{ dispatch(setElement({index:props.index, val: value.value, thisElement: 'operator'}))}}
        />   

        {props.variable !== "isMobile" &&
        props.variable === "Session Count"? 
            <Input type="number" placeholder="Enter Number" onChange={(e)=>{ dispatch(setElement({index:props.index, val: e.target.value, thisElement: 'value'}))}} ></Input> 
        :props.variable === "City"? 
            <CountrySelector index={props.index}/>
        :props.variable === "Device"? 
        <StyledSelect
            styles={customStyles}
            isSearchable ={false}
            options={deviceOptions} 
            placeholder="Select Device"
            onChange={(value)=>{ dispatch(setElement({index:props.index, val: value.value, thisElement: 'device'}))}}
        />          
        :null }

        {props.variable === "isMobile" &&
        <SwichHolder >
            <Switch uncheckedIcon={false} checkedIcon={false} onColor={'#468ff0'} checked={props.check} onChange={() => { dispatch(setElement({index:props.index, val: !props.check, thisElement: 'check'}))}} />
        </SwichHolder>
        }
        <Remove onClick={()=>{ dispatch(setElement({index:props.index, thisElement:'Remove'}))}}>
               remove
        </Remove>

        </div>   
    )
}

export default Query;