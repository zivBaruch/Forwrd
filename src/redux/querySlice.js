import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: "queryValue",
  initialState : [],
  reducers: {
      addNewQuery : (state) => {
          const newQuery = {
            id: Date.now(),
            variable:'',
            operator:'',
            value:'',
            check: false,
            city: '',
            device: '',
          };
          state.push(newQuery);
      },
      deleteQuery : (state , action) =>{
        state.splice(action.payload.index, 1);
      },
      setVariable : (state,action) => {
        state[action.payload.index].variable = action.payload.variable;
      },
      setOperator : (state,action) => {
        state[action.payload.index].operator = action.payload.operator;
      }, 
      setValue : (state,action) => {
        state[action.payload.index].value = action.payload.value;
      },
      toggleCheckBox: (state,action) => {
        state[action.payload.index].check = action.payload.check;    
      },
      setCity : (state,action) => {
        state[action.payload.index].city = action.payload.city;
      },   
      setDevice : (state,action) => {
        state[action.payload.index].device = action.payload.device;
      },                    
  },
});

export const { addNewQuery, deleteQuery, setOperator, setVariable, setValue, toggleCheckBox, setCity, setDevice } = valueSlice.actions;


export default valueSlice.reducer;