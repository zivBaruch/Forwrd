import React from 'react';
import { State } from 'country-state-city';
import { Select } from "../style/Style";
import { setCity } from '../redux/querySlice';
import { useDispatch } from 'react-redux';

function CountrySelector(props) {
  const dispatch = useDispatch();
  const options = State.getStatesOfCountry("US");

  return <Select onChange={(e)=>{ dispatch(setCity({id: props.id,city: e.target.value}))}}>
      {options.map((item, index) => {
          return <option key={index} value={item.name}>{item.name}</option>
      })}
  </Select>
}

export default CountrySelector;