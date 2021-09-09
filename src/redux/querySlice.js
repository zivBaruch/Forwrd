import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: "queryValue",
  initialState : [],
  reducers: {
      queryData: (state, action) => {
          state.value = action.payload;
      },
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
        return state.filter(x => x.id !== action.payload.id);
      },
      setVariable : (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].variable = action.payload.variable;
      },
      setOperator : (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].operator = action.payload.operator;
      }, 
      setValue : (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].value = action.payload.value;
      },
      toggleCheckBox: (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].check = action.payload.check;    
      },
      setCity : (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].city = action.payload.city;
      },   
      setDevice : (state,action) => {
        const index = state.findIndex((x) => x.id === action.payload.id);
        state[index].device = action.payload.device;
      },                    
  },
});

export const { queryData, addNewQuery, deleteQuery, setOperator, setVariable, setValue, toggleCheckBox, setCity, setDevice } = valueSlice.actions;


export default valueSlice.reducer;