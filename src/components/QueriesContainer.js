import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addNewQuery } from '../redux/querySlice';
import Query from './Query';
import { Button } from "../style/Style";

const QueriesContainer = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.queryValue);
    
    return(
        <div>
            {value.map((item) => {
                return <Query key={item.id} id={item.id} variable={item.variable} operator={item.operator}/>
            })}
            {value.length <=3 ?
            <Button onClick={(e)=>{ dispatch(addNewQuery({}))}}>
                +Add Property
            </Button>                    
            : null}          
        </div>
    )
}

export default QueriesContainer;