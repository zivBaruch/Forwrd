import React from 'react';
import { State } from 'country-state-city';
import { setCity } from '../redux/querySlice';
import { useDispatch } from 'react-redux';
import { StyledSelect, customStyles } from '../style/Style';

const CountrySelector = (props) => {
  const dispatch = useDispatch();
  const cities  = State.getStatesOfCountry("US");
  let citiesOptions = [];
   citiesOptions = cities.map((item) => {
    return { value : item.name, label: item.name}
    });
    //console.log(citiesOptions);

  return <StyledSelect 
            styles={customStyles}
            isMulti 
            components={{
                IndicatorSeparator: () => null
              }}
              classNamePrefix = {StyledSelect}  
            options={citiesOptions} 
            placeholder="Select City"
            onChange={(value)=>{ dispatch(setCity({index:props.index, city: value.map(x=> x.value)}))}}
        />

}

export default CountrySelector;