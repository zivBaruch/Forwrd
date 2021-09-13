import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: "queryValue",
  initialState : [],
  reducers: {                
      setElement : (state,action) => {
        
        if(action.payload.thisElement === 'Add'){
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

        }else if(action.payload.thisElement === 'Remove'){  
          
          state.splice(action.payload.index, 1);

        }else{  
          state[action.payload.index][action.payload.thisElement] = action.payload.val;   
        }
      },                    
  },
});

export const { setElement } = valueSlice.actions;


export default valueSlice.reducer;
